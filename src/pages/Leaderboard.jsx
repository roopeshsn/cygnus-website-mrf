import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
//import useWindowSize from 'react-use/lib/useWindowSize'
import { findAll } from '../utils/firebase'

export default function Leaderboard() {
  const [participants, setParticipants] = useState([])
  const [currentTab, setCurrentTab] = useState('projectExpo')
  const [isTeamEvent, setIsTeamEvent] = useState(true)
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(window.innerWidth)
  const [isRunning, setIsRunning] = useState(false)
  const [isLive, setLive] = useState(true)

  const handleClick = async (eventName) => {
    setCurrentTab(eventName)
    console.log(isTeamEvent)
    // if (isTeamEvent) {
    //   field.eventName = `scores.${currentTab}`
    //   console.log(field.eventName)
    // }
    // const data = await findAll(currentTab)
    // console.log(data)
    // data.sort(function (a, b) {
    //   if (isTeamEvent) {
    //     return (
    //       b.scores[`${currentTab}`].teamPoints -
    //       a.scores[`${currentTab}`].teamPoints
    //     )
    //   } else {
    //     return (
    //       b.scores[`${currentTab}`].points - a.scores[`${currentTab}`].points
    //     )
    //   }
    // })
    // console.log(data)
    // setParticipants(data)
    // console.log(participants)
  }
  useEffect(() => {
    setIsRunning(true)
    setTimeout(() => {
      setIsRunning(false)
    }, 6000)
  }, [])
  useEffect(() => {
    if (currentTab === 'projectExpo') {
      setIsTeamEvent(true)
    } else if (currentTab === 'showYourTalent') {
      setIsTeamEvent(true)
    } else if (currentTab === 'foodFeast') {
      setIsTeamEvent(true)
    } else if (currentTab === 'connexion') {
      setIsTeamEvent(true)
    } else {
      setIsTeamEvent(false)
    }
  }, [currentTab])
  // useEffect(() => {
  //   if (isTeamEvent) {
  //     setField({ ...field, eventName: `scores.${currentTab}` })
  //   }
  // }, [isTeamEvent, field, currentTab])
  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      const data = await findAll(currentTab)
      data.sort(function (a, b) {
        if (isTeamEvent) {
          return (
            b.scores[`${currentTab}`].teamPoints -
            a.scores[`${currentTab}`].teamPoints
          )
        } else {
          return (
            b.scores[`${currentTab}`].points - a.scores[`${currentTab}`].points
          )
        }
      })
      if (isMounted) {
        setParticipants(data)
      }
    }
    fetchData()
    return () => {
      isMounted = false
    }
  }, [currentTab, isTeamEvent])
  //console.log(participants)
  return (
    <>
      <Navbar />
      <div className="container pl-4 pr-4 py-4 xl:pl-16">
        {!isLive && (
          <div className="mt-8 pb-72 xl:pl-12">
            <p className="text-xl">
              Leaderboard will be live on 03.30 pm on the day of the event.
            </p>
          </div>
        )}
        {isLive && (
          <>
            <div className="border-b-2 border-solid border-zinc-200">
              <h1 className="text-2xl md:text-3xl font-medium">Leaderboard</h1>
              {isRunning && (
                <Confetti
                  numberOfPieces={250}
                  recycle={false}
                  width={width}
                  height={height}
                />
              )}
              <ul className="flex flex-wrap mt-4 text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <li className="mr-2">
                  <button
                    className={`inline-block px-4 py-2 ${
                      currentTab === 'projectExpo'
                        ? 'text-blue-600 bg-gray-100'
                        : ''
                    } rounded-t-lg`}
                    onClick={() => handleClick('projectExpo')}
                  >
                    Project Expo
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    className={`inline-block px-4 py-2 rounded-t-lg ${
                      currentTab === 'blockAndTackle'
                        ? 'text-blue-600 bg-gray-100'
                        : ''
                    }`}
                    onClick={() => handleClick('blockAndTackle')}
                  >
                    Block and Tackle
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    className={`inline-block px-4 py-2 rounded-t-lg ${
                      currentTab === 'memography'
                        ? 'text-blue-600 bg-gray-100'
                        : ''
                    }`}
                    onClick={() => handleClick('memography')}
                  >
                    Memography
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    className={`inline-block px-4 py-2 rounded-t-lg ${
                      currentTab === 'elevatorPitching'
                        ? 'text-blue-600 bg-gray-100'
                        : ''
                    }`}
                    onClick={() => handleClick('elevatorPitching')}
                  >
                    Elevator Pitch
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    className={`inline-block px-4 py-2 rounded-t-lg ${
                      currentTab === 'connexion'
                        ? 'text-blue-600 bg-gray-100'
                        : ''
                    }`}
                    onClick={() => handleClick('connexion')}
                  >
                    Connexion
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    className={`inline-block px-4 py-2 rounded-t-lg ${
                      currentTab === 'foodFeast'
                        ? 'text-blue-600 bg-gray-100'
                        : ''
                    }`}
                    onClick={() => handleClick('foodFeast')}
                  >
                    Food Feast
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    className={`inline-block px-4 py-2 rounded-t-lg ${
                      currentTab === 'showYourTalent'
                        ? 'text-blue-600 bg-gray-100'
                        : ''
                    }`}
                    onClick={() => handleClick('showYourTalent')}
                  >
                    Show Your Talent
                  </button>
                </li>
              </ul>
            </div>
            <div className="max-w-4xl mt-4 pb-12">
              <ul>
                {participants &&
                  participants?.map((user, idx) => {
                    return (
                      <li
                        key={idx}
                        className="border-b-2 border-solid border-zinc-300"
                      >
                        <div className="text-lg inline-block mr-2">
                          {user.name}
                        </div>
                        {isTeamEvent && user && (
                          <>
                            <div className="text-lg inline-block mr-2">-</div>
                            <div className="text-lg inline-block">
                              {user.scores[`${currentTab}`]?.teamName}
                            </div>
                            <div className="text-lg inline-block mr-2 ml-2">
                              -
                            </div>
                            <div className="text-lg inline-block">
                              {user.scores[`${currentTab}`]?.teamPoints}
                            </div>
                          </>
                        )}
                        {!isTeamEvent && user && (
                          <>
                            <div className="text-lg inline-block mr-2">-</div>
                            <div className="text-lg inline-block">
                              {user.scores[`${currentTab}`]?.points}
                            </div>
                          </>
                        )}
                      </li>
                    )
                  })}
              </ul>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  )
}
