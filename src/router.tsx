import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import Index from './pages/index/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
