import { useLoaderData } from 'react-router';
import {
  Sheet,
  Button,
  SettingsSheet,
  Checkbox,
  Switch,
} from '@mojtaba118/raui';
import { useTheme } from '@mojtaba118/raui/Theme';
import { useState } from 'react';
// import { Button } from '@mui/material';
function Main() {
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
            <Switch />
          </>
        ))}
      </ul>
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
