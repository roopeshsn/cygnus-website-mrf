import { doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { collection, query, where } from 'firebase/firestore'

export const findOne = async (collection, id) => {
  const docRef = doc(db, collection, id)
  const docSnap = await getDoc(docRef)
  return docSnap.exists() ? docSnap.data() : null
}

export const findAll = async (id) => {
  const usersRef = collection(db, 'testUsers')
  let q = query(usersRef, where(`scores.${id}`, '!=', null))
  if (id === 'projectExpo' || id === 'foodFeast') {
    q = query(
      usersRef,
      where(`scores.${id}`, '!=', null),
      where(`scores.${id}.isTeamLead`, '==', true),
    )
  }
  const querySnapshot = await getDocs(q)
  const allUsers = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, ' => ', doc.data())
    allUsers.push(doc.data())
  })
  return allUsers
}
