import { createBrowserRouter } from 'react-router-dom';
import { NxWelcome } from '../../pages/welcome/nx-welcome';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <NxWelcome title="Primo" />,
  },
]);
