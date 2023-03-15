import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import TinyUrlPage from './pages/TinyUrlPage';
import LoginPage from './pages/LoginPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/tiny-url', element: <TinyUrlPage /> },
      { path: '/login', element: <LoginPage /> },
    ],
  },
];

export default routes;
