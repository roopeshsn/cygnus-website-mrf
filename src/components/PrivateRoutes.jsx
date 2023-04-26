import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoutes() {
  const { currentUser } = useAuth()
  return currentUser?.uid ? <Outlet /> : <Navigate to="/login" />
}
