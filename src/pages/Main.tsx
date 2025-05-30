import { useLoaderData, useNavigate } from 'react-router';
import { useTheme } from 'custom-raui/theme';
import { Button, Sheet, SettingsSheet, Checkbox, Switch } from 'custom-raui';
// import { SettingsSheet } from 'custom-raui/settingsSheet';
// import { SettingsSheet} from '@mojtaba118/raui'
import { useState } from 'react';
// import { Button, Checkbox, Switch } from '@mui/material';
function Main() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const { users } = useLoaderData();
  const { changeTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <h1>Main</h1>
      <ul>
        {users.map((user) => (
          <>
            <li key={user.id}>{user.name}</li>
            <Checkbox />
            <Switch
              checked={checked}
              activeColor="red"
              onChange={(isChecked) => setChecked(isChecked)}
            />
          </>
        ))}
      </ul>
      <Sheet open={open} onClose={() => setOpen(false)}>
        Hello
      </Sheet>
      <Sheet open={open} onClose={() => setOpen(false)}>
        Hello
      </Sheet>
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
