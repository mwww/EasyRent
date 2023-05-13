import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import Index from './pages/index/index'
import DummyPage from './pages/dummyPage/dummyPage'
import Catalogue from './pages/catalogue/catalogue'
import AboutUs from './pages/aboutUs/aboutUs'
import Checkout from './pages/checkout/checkout'
import Login from './pages/app/login/login';
import Dashboard from './pages/app/dashboard/dashboard'
import Register from './pages/app/register/register';
import { element } from 'prop-types'

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

  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <Dashboard />
  },
  {
    path: '/register',
    element: <Register />
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
