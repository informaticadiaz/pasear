import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

import ZipTote from '../components/Place';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/places/:id",
    element: <ZipTote />,
  }
]);

export default router