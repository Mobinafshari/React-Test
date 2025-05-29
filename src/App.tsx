// const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(
//   (res) => res.json()
// );
import '@config/i18n';
// import { useState } from 'react';

// function App() {
//   console.log(usersPromise);
//   const [users, setUsers] = useState(null);

//   if (!users) {
//     usersPromise.then((data) => setUsers(data));
//     return <p>Loading users...</p>;
//   }

//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }
// export default App;
import { router } from '@routes/routes';
import { RouterProvider } from 'react-router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
