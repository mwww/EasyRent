import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import Index from './pages/index/index'
import DummyPage from './pages/dummyPage/dummyPage'
import Catalogue from './pages/catalogue/catalogue'
import AboutUs from './pages/aboutUs/aboutUs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },

  {
    path: '/dummy-page',
    element: <DummyPage />,
  },

  {
    path: '/catalogue',
    element: <Catalogue />,
  },
  {
    path: '/AboutUs',
    element: <AboutUs />,
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
