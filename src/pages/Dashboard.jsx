import { Box, Container, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  return (
    <Container>
      <Box sx={{ mt: '1rem' }}>
        <Typography variant="h4" component="h1">
          Dashboard
        </Typography>
        <Typography variant="h6" sx={{ mt: '1rem' }}>
          Hi, {currentUser.email}!
        </Typography>
        <Button
          variant="outlined"
          sx={{ mt: '0.5rem' }}
          onClick={(e) => navigate('/dashboard/myqrcode')}
        >
          Show my QRCode
        </Button>
      </Box>
    </Container>
  )
}
