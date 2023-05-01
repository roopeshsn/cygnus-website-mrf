import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { events } from '../data/events'

export default function Event() {
  const [eventData, setEventData] = useState({})
  let params = useParams()
  let eventName = params.event

  useEffect(() => {
    let eventDetails = events.filter((event) => event.param === eventName)
    setEventData(eventDetails[0])
  }, [eventName])

  return (
    <>
      <Navbar />
      <section className="bg-white mb-8">
        <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              {eventData.title}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              {eventData.description || 'Nothing'}
            </p>
            <Link
              to="https://bit.ly/CY23Register"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-zinc-900 focus:ring-4 focus:ring-slate-300"
            >
              Register Now
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={eventData.image} alt="mockup" />
          </div>
        </div>
        <div className="flex flex-col justify-items-center items-center px-4 mt-8">
          <div className="block min-w-full md:min-w-0 md:w-[42rem] lg:w-[52rem] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl text-gray-900">
              Rules
            </h5>
            <pre className="font-normal font-sans text-lg text-gray-700 whitespace-pre-line">
              {eventData.rules}
            </pre>
          </div>
        </div>
        <div className="flex flex-col justify-items-center items-center px-4 mt-8">
          <div className="block min-w-full md:min-w-0 md:w-[42rem] lg:w-[52rem] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl text-gray-900">
              Points to Note
            </h5>
            <pre className="font-normal font-sans text-lg text-gray-700 whitespace-pre-line">
              {eventData.note}
            </pre>
          </div>
        </div>
        <div className="flex flex-col justify-items-center items-center px-4 mt-8">
          <div className="block min-w-full md:min-w-0 md:w-[42rem] lg:w-[52rem] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl text-gray-900">
              Details to Know
            </h5>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl items-center">
              <div className="flex gap-2">
                <span className="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </span>
                <span className="inline-block">{eventData.date}</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="inline-block">
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
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </span>
                <div className="inline-block">
                  {eventData.contact &&
                    eventData.contact.map((person) => {
                      return (
                        <div key={person.id}>
                          {person.name} - {person.mobile}
                        </div>
                      )
                    })}
                </div>
              </div>
              <div className="flex gap-2">
                <span className="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span className="inline-block">{eventData.time}</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block">
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <span className="inline-block">{eventData.venue}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            to="https://bit.ly/CY23Register"
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-zinc-900 focus:ring-4 focus:ring-slate-300"
          >
            Book Now
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
