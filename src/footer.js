import React from 'react'
import './footer.css'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit'
import InstagramIcon from '@mui/icons-material/Instagram'
import IconButton from '@mui/material/IconButton'

export default function App() {
  return (
    <MDBFooter className="footer bg-dark text-center text-white">
      <div style={{ backgroundColor: '#000000' }}>
        <IconButton aria-label="Instagram" size="large">
          <a href="https://www.instagram.com/cygnus_2023_/" target="_blank">
            <InstagramIcon style={{ color: 'white' }} fontSize="inherit" />
          </a>
        </IconButton>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: '#000000' }}>
        <p className="text-white">
          © 2023 Copyright, &nbsp;Cygnus Event.&nbsp; All Rights Reserved
        </p>
      </div>
    </MDBFooter>
  )
}
