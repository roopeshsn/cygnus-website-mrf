import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Payment from './pages/Payment'
import { AuthProvider } from './contexts/AuthContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import MyQrCode from './pages/MyQrCode'
import User from './pages/User'
import PrivateRoutes from './components/PrivateRoutes'
import Events from './pages/Events'
import Event from './pages/Event'
import Contact from './pages/Contact'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/myqrcode" element={<MyQrCode />} />
          <Route path="/search" element={<User />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/payment">
          <Route path=":message">
            <Route path=":amount" element={<Payment />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
