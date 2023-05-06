import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Login() {
  const { signin, currentUser } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (currentUser) {
      navigate('/dashboard')
    }
  }, [currentUser, navigate])
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(currentUser)
    const data = new FormData(e.currentTarget)
    try {
      setError('')
      setLoading(true)
      await signin(data.get('email'), data.get('password'))
      navigate('/dashboard')
      setLoading(false)
    } catch (error) {
      setError('Failed to signin')
      setLoading(false)
    }
  }

  // console.log(credentials)
  return (
    <>
      <Navbar />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100%',
          mt: '2rem',
        }}
      >
        <Box
          sx={{
            marginY: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
