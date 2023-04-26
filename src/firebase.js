import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import { getStorage } from 'firebase/storage'

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_DRIVE_API_KEY,
//   authDomain: process.env.FIREBASE_DRIVE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_DRIVE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_DRIVE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_DRIVE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_DRIVE_APP_ID,
// }

const firebaseConfig = {
  apiKey: 'AIzaSyDneGAykvr0p0NJY1AATARk-Jwmof35iTo',
  authDomain: 'cygnus-website-84638.firebaseapp.com',
  projectId: 'cygnus-website-84638',
  storageBucket: 'cygnus-website-84638.appspot.com',
  messagingSenderId: '778268716209',
  appId: '1:778268716209:web:1dd335cdd9f06030058690',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore()
// const storage = getStorage(app)
export default app
