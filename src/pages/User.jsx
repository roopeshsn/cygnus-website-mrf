import { Button } from '@mui/material'
import { doc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { db } from '../firebase'
import { findOne } from '../utils/firebase'

export default function User() {
  const [userData, setUserData] = useState({})
  const [searchParams] = useSearchParams()
  const uid = searchParams.get('user')
  useEffect(() => {
    findOne('users', uid.toString())
      .then((data) => setUserData(data))
      .catch((e) => console.error(e))
  }, [uid])

  const handleClick = (e) => {
    const docRef = doc(db, 'users', uid.toString())
    updateDoc(docRef, {
      isEligibleForFood: false,
    })
      .then(() => {
        setUserData({ ...userData, isEligibleForFood: false })
        console.log('success')
        //window.location.reload(false)
      })
      .catch((e) => console.error(e))
  }
  return (
    <div>
      {userData?.isEligibleForFood ? (
        <p>User is eligible for food!</p>
      ) : (
        <p>User is not eligible for food!</p>
      )}
      <Button onClick={handleClick}>Mark user as bought the food!</Button>
    </div>
  )
}
