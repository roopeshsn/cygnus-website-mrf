import { doc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { db } from '../firebase'
import { findOne } from '../utils/firebase'

export default function User() {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(false)
  const [searchParams] = useSearchParams()
  const uid = searchParams.get('user').toString()

  useEffect(() => {
    let isMounted = true
    async function fetchData() {
      try {
        const data = await findOne('testUsers', uid.toString())
        if (isMounted) {
          setUserData(data)
        }
        setError(false)
      } catch (e) {
        console.log(e)
        setError(true)
      }
    }
    fetchData()
    return () => {
      isMounted = false
    }
  }, [uid])

  console.log(userData)
  // console.log(typeof userData)

  const handleClick = (e) => {
    const docRef = doc(db, 'testUsers', uid.toString())
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
    <>
      <Navbar />
      <div className="container px-4 py-4">
        {userData && (
          <div className="grid grid-col-1 gap-4 justify-center items-center">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
              <div className="flex gap-2">
                {userData?.isEligibleForFood ? (
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
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
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
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                <p className="text-xl">
                  {userData.isEligibleForFood
                    ? `Participant is eligible for food! That's ${userData.foodChoice}!`
                    : 'Participant is not eligible for food!'}
                </p>
              </div>
              {userData?.isEligibleForFood && (
                <button
                  onClick={handleClick}
                  className="text-base bg-primary text-white font-medium px-4 py-2 mt-4 rounded"
                >
                  Mark as bought the food
                </button>
              )}
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <h1 className="text-2xl font-medium">Participant Details</h1>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl items-center">
                <div className="flex gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <div>{userData.name}</div>
                </div>
                <div className="flex gap-2 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                      />
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <span>{userData.collegeName}</span>
                    <span>
                      {userData.programme} - {userData.degree} - {userData.year}
                    </span>
                    <span>{userData.collegeRollNumber}</span>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <div className="flex flex-col">{userData.package}</div>
                </div>
                <div className="flex gap-2 items-center border-b-2 border-solid border-zinc-300 pb-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                      />
                    </svg>
                  </span>
                  <div>
                    {userData &&
                      userData.registeredEvents?.map((event) => {
                        return <div key={event}>{event}</div>
                      })}
                  </div>
                </div>

                <div>
                  {userData &&
                    Object.entries(userData?.scores)?.map(([key, value]) => {
                      return (
                        <div key={key}>
                          {value?.teamName ? (
                            <div className="flex gap-2 items-center border-b-2 border-solid border-gray-300">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                                  />
                                </svg>
                              </span>
                              <div>
                                <div>{key}</div>
                                <div>
                                  {value?.isTeamLead && 'He is the Team Lead!'}
                                </div>
                                <div>Team {value.teamName}</div>
                                {value?.isTeamLead ||
                                  (value?.isTeam === true && (
                                    <div>
                                      {value.team.map((item, idx) => {
                                        return (
                                          <span key={idx}>
                                            {value.team.length - 1 === idx
                                              ? item
                                              : `${item},`}
                                          </span>
                                        )
                                      })}
                                    </div>
                                  ))}
                                {key === 'projectExpo' && (
                                  <div>Title: {value?.projectTitle}</div>
                                )}
                                {key === 'showYourTalent' && (
                                  <div>Talent: {value?.talent}</div>
                                )}
                              </div>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
