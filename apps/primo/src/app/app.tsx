import { RouterProvider } from '@tanstack/router';
import { router } from '../components/Routes';

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
