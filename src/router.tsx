import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Index from './pages/index/index'
import DummyPage from './pages/dummyPage/dummyPage'
import Catalogue from './pages/catalogue/catalogue'
import AboutUs from './pages/aboutUs/aboutUs'
import Checkout from './pages/checkout/checkout'
import Login from './pages/app/login/login'
import Dashboard from './pages/app/dashboard/dashboard'
import Register from './pages/app/register/register'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dummy-page" element={<DummyPage />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
