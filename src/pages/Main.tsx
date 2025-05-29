import { useLoaderData } from 'react-router';

function Main() {
  const { users } = useLoaderData();
  console.log('users', users);
  return (
    <div>
      <h1>Main</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
