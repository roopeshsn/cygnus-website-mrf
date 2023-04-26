import React from 'react'
import {
  Container,
  Typography,
  Button,
  Box,
  Link as MuiLink,
} from '@mui/material'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Container>
      <Box sx={{ mt: '2rem' }}>
        <Typography variant="h4" component="h1">
          Cygnus 2023
        </Typography>
        <Typography sx={{ mt: '1rem' }} variant="h6">
          We're still working on this!
        </Typography>
        <Link to="/login">
          <MuiLink
            sx={{ display: 'block', fontSize: '1.2rem' }}
            variant="outlined"
            component="button"
          >
            Login
          </MuiLink>
        </Link>
      </Box>
    </Container>
  )
}
