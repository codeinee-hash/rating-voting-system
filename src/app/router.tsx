import { CinemaPage } from '@/pages/cinema';
import { HomePage } from '@/pages/home';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/cinema/:id',
        element: <CinemaPage />,
      },
    ],
  },
]);
