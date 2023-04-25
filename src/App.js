import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Payment from './pages/Payment'
import { AuthProvider } from './contexts/AuthContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import MyQrCode from './pages/MyQrCode'
import User from './pages/User'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/myqrcode" element={<MyQrCode />} />
        <Route path="/search" element={<User />} />
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
