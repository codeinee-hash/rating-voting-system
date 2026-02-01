import { createBrowserRouter } from 'react-router-dom';
import { CinemaPage } from '@/pages/cinema';
import { HomePage } from '@/pages/home';
import App from './app';

export const router = createBrowserRouter([
  {
    element: <App />,
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
