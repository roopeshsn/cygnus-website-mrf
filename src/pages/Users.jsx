import { doc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from '../components/Navbar'
import { db } from '../firebase'
import { findAll } from '../utils/firebase'

export default function Users() {
  const [users, setUsers] = useState(null)
  const [currentEvent, setCurrentEvent] = useState(null)
  const [isTeamEvent, setIsTeamEvent] = useState(null)
  const [currentUsername, setCurrentUsername] = useState(null)
  const [currentUid, setCurrentUid] = useState(null)
  const [isModalActive, setIsModalActive] = useState(false)
  //const [isTeamEvent, setIsTeamEvent] = useState(false)
  const [score, setScore] = useState(null)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  // const [updateField, setUpdateField] = useState(null)
  let params = useParams()
  // let eventName = params.event
  // let isTeamEvent = false
  // if (eventName === 'block-and-tackle') {
  //   eventName = 'blockAndTackle'
  //   //setEventName('blockAndTackle')
  //   // setIsTeamEvent(false)
  // } else if (eventName === 'show-your-talent') {
  //   //setEventName('showYourTalent')
  //   // setIsTeamEvent(true)
  //   eventName = 'showYourTalent'
  //   isTeamEvent = true
  // } else if (eventName === 'project-expo') {
  //   //setEventName('projectExpo')
  //   // setIsTeamEvent(true)
  //   eventName = 'projectExpo'
  //   isTeamEvent = true
  // } else if (eventName === 'elevator-pitch') {
  //   //setEventName('elevatorPitch')
  //   // setIsTeamEvent(false)
  //   eventName = 'elevatorPitch'
  // } else if (eventName === 'food-feast') {
  //   //setEventName('foodFeast')
  //   // setIsTeamEvent(true)
  //   isTeamEvent = true
  //   eventName = 'foodFeast'
  // } else if (eventName === 'connexion') {
  //   // setIsTeamEvent(true)
  //   isTeamEvent = true
  // } else {
  //   isTeamEvent = false
  // }
  useEffect(() => {
    let eventName = params.event
    if (eventName === 'block-and-tackle') {
      setCurrentEvent('blockAndTackle')
      setIsTeamEvent(false)
    } else if (eventName === 'show-your-talent') {
      setCurrentEvent('showYourTalent')
      setIsTeamEvent(true)
    } else if (eventName === 'project-expo') {
      setCurrentEvent('projectExpo')
      setIsTeamEvent(true)
    } else if (eventName === 'elevator-pitch') {
      setCurrentEvent('elevatorPitching')
      setIsTeamEvent(false)
    } else if (eventName === 'food-feast') {
      setCurrentEvent('foodFeast')
      setIsTeamEvent(true)
    } else if (eventName === 'connexion') {
      setCurrentEvent('connexion')
      setIsTeamEvent(true)
    } else {
      setCurrentEvent(params.event)
      setIsTeamEvent(false)
    }
  }, [params])
  useEffect(() => {
    let isMounted = true
    async function fetchData() {
      try {
        const data = await findAll(currentEvent)
        data.sort(function (a, b) {
          if (isTeamEvent) {
            return (
              b.scores[`${currentEvent}`].teamPoints -
              a.scores[`${currentEvent}`].teamPoints
            )
          } else {
            return (
              b.scores[`${currentEvent}`].points -
              a.scores[`${currentEvent}`].points
            )
          }
        })
        if (isMounted) {
          setUsers(data)
        }
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
    return () => {
      isMounted = false
    }
  }, [currentEvent, isTeamEvent])
  const handleClick = (uid, username) => {
    console.log('click')
    setCurrentUid(uid)
    setCurrentUsername(username)
    console.log(uid)
    setIsModalActive(!isModalActive)
    // console.log(e)

    // const docRef = doc(db, 'testUsers', uid.toString())
    // updateDoc(docRef, {
    //   isEligibleForFood: false,
    // })
    //   .then(() => {
    //     console.log('success')
    //   })
    //   .catch((e) => console.error(e))
  }
  const handleClose = (e) => {
    e.preventDefault()
    setIsModalActive(false)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      //console.log(score)
      let updateField = ''
      if (isTeamEvent) {
        updateField = `scores.${currentEvent}.teamPoints`
      } else {
        updateField = `scores.${currentEvent}.points`
      }
      let field = {}
      field.updateField = updateField
      setIsModalActive(false)
      //console.log(updateField)
      //console.log({ [field.updateField]: 2 })
      const docRef = doc(db, 'testUsers', currentUid.toString())
      await updateDoc(docRef, {
        [field.updateField]: score,
      })
      console.log('success')
      setScore(null)
      setSuccess(true)
      setError(false)
    } catch (error) {
      setError(true)
      setSuccess(false)
    }
    //console.log(score)
  }
  return (
    <>
      <Navbar />
      <div className="container px-4 py-4 lg:px-14">
        <h1 className="text-xl font-medium">
          All Participants - {currentEvent} - {users?.length}
        </h1>
        <div className="mt-4 flex flex-col gap-1">
          {users &&
            users.map((user, idx) => {
              return (
                <div
                  key={idx}
                  className="flex justify-between items-center border-b-2 border-solid border-zinc-300 text-lg"
                >
                  <div>
                    <div className="text-lg inline-block mr-2">{user.name}</div>
                    {isTeamEvent ? (
                      <>
                        <span className="inline-block mr-2">-</span>
                        <span className="inline-block mr-2">
                          {user.scores[`${currentEvent}`].teamName ||
                            (currentEvent === 'showYourTalent' && 'Solo')}
                        </span>
                        <span>{user.scores[`${currentEvent}`].teamPoints}</span>
                      </>
                    ) : (
                      <>
                        <span className="mr-2">-</span>
                        <span>{user.scores[`${currentEvent}`].points}</span>
                      </>
                    )}
                    {/* {user.scores[currentEvent].isTeamLead ? (
                      <span className="inline-block">TL</span>
                    ) : (
                      <></>
                    )} */}

                    {/* <div>{user.collegeRollNumber}</div> */}
                  </div>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleClick(user.uid, user.name)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                    <span className="sr-only">Open modal</span>
                  </button>
                </div>
              )
            })}
        </div>
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className={`fixed top-0 left-0 right-0 z-50 ${
            isModalActive ? 'block' : 'hidden'
          } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative top-1/4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="authentication-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-4 pb-6 pt-12 lg:px-8">
                <input
                  onChange={(e) => setScore(e.target.value)}
                  type="text"
                  name="score"
                  id="score"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5"
                  placeholder="Score"
                  required
                />
                <button
                  onClick={handleSubmit}
                  className="bg-primary text-white text-sm font-medium px-4 py-2 mt-4 rounded"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed left-16 bottom-16 right-4">
          {success && (
            <div
              id="toast-success"
              className="flex items-center w-full max-w-sm p-4 text-gray-500 bg-white rounded-lg shadow"
              role="alert"
            >
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Check icon</span>
              </div>
              <div className="ml-3 text-sm font-normal">
                Score updated successfully for {currentUsername}!
              </div>
              <button
                onClick={() => setSuccess(false)}
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
                data-dismiss-target="#toast-success"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          )}
          {error && (
            <div
              id="toast-danger"
              className="flex items-center w-full max-w-sm p-4 mb-4 text-gray-500 bg-white rounded-lg shadow"
              role="alert"
            >
              <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Error icon</span>
              </div>
              <div className="ml-3 text-sm font-normal">
                Error on updating Score for {currentUsername}!
              </div>
              <button
                type="button"
                onClick={() => setError(false)}
                className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
                data-dismiss-target="#toast-danger"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
