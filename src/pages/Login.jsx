import React, { useState } from 'react'
import { TextField, Button, Container, Box, Typography } from '@mui/material'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router'

export default function Login() {
  //const [credentials, setCredentials] = useState({ email: '', password: '' })
  // const handleChange = (e) => {
  //   setCredentials({
  //     ...credentials,
  //     [e.currentTarget.id]: e.currentTarget.value,
  //   })
  // }
  const { signin, currentUser } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  if (currentUser.uid) {
    navigate('/dashboard')
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(currentUser)
    const data = new FormData(e.currentTarget)
    console.log(data.get('email'), data.get('password'))
    try {
      setError('')
      setLoading(true)
      await signin(data.get('email'), data.get('password'))
      setLoading(false)
      navigate('/dashboard')
    } catch (error) {
      setError('Failed to signin')
      setLoading(false)
    }
  }

  // console.log(credentials)
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
  )
}
