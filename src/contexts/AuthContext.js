import React, { useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from 'firebase/auth'
import { auth } from '../firebase'
import { FirebaseError } from 'firebase/app'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  async function signin(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      if (err instanceof FirebaseError) {
        handleError(err.code)
      }
    }
  }

  function signout() {
    return signOut(auth)
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  function emailUpdate(newEmail) {
    return updateEmail(currentUser, newEmail)
  }

  function passwordUpdate(newPassword) {
    return updatePassword(currentUser, newPassword)
  }

  const value = {
    currentUser,
    signup,
    signin,
    signout,
    resetPassword,
    emailUpdate,
    passwordUpdate,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

const handleError = (errorCode) => {
  switch (errorCode) {
    case 'auth/email-already-in-use': {
      alert('The email address is already in use by another account.')
      break
    }
    case 'auth/user-not-found': {
      alert("Account with that email doesn't exists")
      break
    }
    case 'auth/weak-password': {
      alert('Password should be at least 6 characters.')
      break
    }
    case 'auth/invalid-email': {
      alert('Invalid email')
      break
    }
    case 'auth/wrong-password': {
      alert('The password is invalid.')
      break
    }
    case 'auth/missing-email': {
      alert('Missing email')
      break
    }
    case 'auth/internal-error': {
      alert('Missing details')
      break
    }
    default: {
      alert(errorCode)
    }
  }
}
