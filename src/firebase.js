import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
require('dotenv').config()

const firebaseConfig = {
  apiKey: process.env.FIREBASE_DRIVE_API_KEY,
  authDomain: process.env.FIREBASE_DRIVE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_DRIVE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_DRIVE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_DRIVE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_DRIVE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore()
const storage = getStorage(app)
export default app
