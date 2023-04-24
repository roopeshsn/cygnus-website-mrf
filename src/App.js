import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Payment from './pages/Payment'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
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
