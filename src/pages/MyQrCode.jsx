import React from 'react'
import QRCode from 'react-qr-code'
import { useAuth } from '../contexts/AuthContext'

export default function MyQrCode() {
  const { currentUser } = useAuth()
  console.log(currentUser)
  const value = `https://cygnus2023.netlify.app/search?user=${currentUser.uid}`
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <p>Show the QR Code to the volunteer to avail food!</p>
      <div
        style={{
          height: 'auto',
          margin: '0 auto',
          maxWidth: '100%',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <QRCode
          size={256}
          style={{
            height: '250px',
            maxWidth: '100%',
            width: '250px',
          }}
          value={value}
        />
      </div>
    </div>
  )
}
