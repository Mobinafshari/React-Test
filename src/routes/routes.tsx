import { getUsers } from '@services/Index';
import { retryDynamicImport } from '@utils/retryDynamicImport';
import { createBrowserRouter } from 'react-router';
const Main = retryDynamicImport(() => import('@pages/Main'));
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: async () => {
      return {
        users: await getUsers(),
      };
    },
  },
]);
