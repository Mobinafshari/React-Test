import { useLoaderData, useNavigate } from 'react-router';
import { Checkbox, Switch, Button } from 'custom-raui';
import { useTheme } from 'custom-raui/Theme';
import { useState } from 'react';
// import { Button, Checkbox, Switch } from '@mui/material';
function Main() {
  const navigate = useNavigate();
  const { users } = useLoaderData();
  const { changeTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => navigate('/test')}>Open</Button>
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
      {/* <Sheet open={open} onClose={() => setOpen(false)}>
        Hello
      </Sheet>
      <SettingsSheet
        changeTheme={changeTheme}
        onClose={() => setOpen(false)}
        open={open}
        theme={theme}
      /> */}
    </div>
  );
}

export default Main;
