import { useLoaderData, useNavigate } from 'react-router';
import { Button } from '@mojtaba118/raui';
import { useTheme } from '@mojtaba118/raui/Theme';
import { SettingsSheet } from 'custom-raui';
import { useState } from 'react';
import { useTestContext } from '@context/TestContext';
import store from '@store/index';
function Main() {
  const navigate = useNavigate();
  const { num, setNumber } = useTestContext();
  const [checked, setChecked] = useState(false);
  const { users } = useLoaderData();
  const { changeTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [count, setCount] = store.useStoreKey('count');

  const [themeFromStore, _] = store.useStoreKey('theme');

  return (
    <div>
      {themeFromStore}
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount((c) => c + 1)}>
          Functional Update
        </button>
      </div>
      <div>
        <Button onClick={() => setNumber(num + 1)}>Increase</Button>
        {num}
      </div>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <h1>Main</h1>
      <ul>
        {users.map((user) => (
          <>
            <li key={user.id}>{user.name}</li>
            {/* <Checkbox />
            <Switch
              checked={checked}
              activeColor="red"
              onChange={(isChecked) => setChecked(isChecked)}
            /> */}
          </>
        ))}
      </ul>
      {/* <Sheet open={open} onClose={() => setOpen(false)}>
        Hello
      </Sheet>
      <Sheet open={open} onClose={() => setOpen(false)}>
        Hello
      </Sheet> */}
      <SettingsSheet
        changeTheme={changeTheme}
        onClose={() => setOpen(false)}
        open={open}
        theme={theme}
      />
    </div>
  );
}

export default Main;
