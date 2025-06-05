import { TestProvider } from '@context/TestContext';
import { getUsers } from '@services/Index';
import { retryDynamicImport } from '@utils/retryDynamicImport';
import { createBrowserRouter } from 'react-router';
const Main = retryDynamicImport(() => import('@pages/Main'));
const SecondMain = retryDynamicImport(() => import('@pages/SecondMain'));
const Test = retryDynamicImport(() => import('@pages/Test'));
export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <TestProvider>
        <Main />
        <SecondMain />
      </TestProvider>
    ),
    loader: async () => {
      return {
        users: await getUsers(),
      };
    },
  },
  { path: '/test', element: <Test /> },
]);
