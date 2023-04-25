import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const findOne = async (collection, id) => {
  const docRef = doc(db, collection, id)
  const docSnap = await getDoc(docRef)
  return docSnap.exists() ? docSnap.data() : null
}
