import Button from '@mui/material/Button'
import React from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{currentUser.email}</p>
      <Button onClick={(e) => navigate('/dashboard/myqrcode')}>
        Show my QRCode
      </Button>
    </div>
  )
}
