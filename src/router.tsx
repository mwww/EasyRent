import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Index from './pages/index/index'
import DummyPage from './pages/dummyPage/dummyPage'
import Catalogue from './pages/catalogue/catalogue'
import AboutUs from './pages/aboutUs/aboutUs'
import Checkout from './pages/checkout/checkout'
import Details from './pages/details/details'

import Login from './pages/app/login/login'
import Register from './pages/app/register/register'

import Dashboard from './pages/app/dashboard/dashboard'

import NewDashboard from './pages/app/newDashboard/newDashboard'
import Overview from './pages/app/newDashboard/sub/overview/overview'
import Cars from './pages/app/newDashboard/sub/cars/cars'
import Appointments from './pages/app/newDashboard/sub/appointments/appointments'

import E404 from './pages/e404/e404'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dummy-page" element={<DummyPage />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/details" element={<Navigate to="/catalogue" replace />} />
        <Route path="/details/:id" element={<Details />} />

        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* management */}
        {/* <Route path="/admin" element={<Dashboard />} /> */}

        {/* new management */}
        <Route
          path="/admin"
          element={<Navigate to="/admin/overview" replace />}
        />
        <Route path="/admin" element={<NewDashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="cars" element={<Cars />} />
          <Route path="appointments" element={<Appointments />} />
        </Route>

        <Route path="*" element={<E404 />} />
      </Routes>
    </BrowserRouter>
  )
}
