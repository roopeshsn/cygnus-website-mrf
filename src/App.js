import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Payment from './pages/Payment'
import { AuthProvider } from './contexts/AuthContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import MyQrCode from './pages/MyQrCode'
import User from './pages/User'
import PrivateRoutes from './components/PrivateRoutes'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} exact />
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
