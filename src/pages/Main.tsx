import { useLoaderData } from 'react-router';
import { Button } from '@mojtaba118/raui';
import { useTheme } from '@mojtaba118/raui/Theme';
import { SettingsSheet } from 'custom-raui';
import { useState } from 'react';
import { useTestContext } from '@context/TestContext';
import store from '@store/index';
function Main() {
  const { users } = useLoaderData();
  const { changeTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);
  const { num, setNumber } = useTestContext();
  const [count, setCount] = store.useStoreKey('count');

  return (
    <>
      <div>
        <div>
          <h2>Count: {count}</h2>
          <Button onClick={() => setCount(count + 1)}>
            Increment for library
          </Button>
          <Button onClick={() => setCount((c) => c + 1)}>
            Functional Update
          </Button>
        </div>
        <div>
          <Button onClick={() => setNumber(num + 1)}>Increase Context</Button>
          {num}
        </div>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <h1>Main</h1>
        <ul>
          {users.map((user: any) => (
            <>
              <li key={user.id}>{user.name}</li>
            </>
          ))}
        </ul>
        <SettingsSheet
          changeTheme={changeTheme}
          onClose={() => setOpen(false)}
          open={open}
          theme={theme}
        />
      </div>
      <hr />
    </>
  );
}

export default Main;
