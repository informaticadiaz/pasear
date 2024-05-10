import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Place from '../components/Place'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/places/:id",
    element: <Place />,
  }
]);

export default router