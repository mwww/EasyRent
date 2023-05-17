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
        <Route path="/admin" element={<Dashboard />} />

        <Route path="*" element={<E404 />} />
      </Routes>
    </BrowserRouter>
  )
}
