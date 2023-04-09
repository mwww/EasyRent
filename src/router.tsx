import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import Index from './pages/index/index'
import Catalogue from './pages/catalogue/catalogue'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/catalogue',
    element: <Catalogue />,
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
