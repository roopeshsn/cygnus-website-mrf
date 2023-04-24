import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Payment from './pages/Payment'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment/:message/:amount" element={<Payment />} />
    </Routes>
  )
}

export default App
