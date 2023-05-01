import React from 'react'
import Event from '../components/EventCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { events } from '../data/events'

export default function Events() {
  return (
    <>
      <Navbar />
      <section className="px-4 py-8">
        <div className="flex flex-col justify-items-center items-center">
          <h1 className="text-4xl font-bold text-center">
            Come and show off your talents!
          </h1>
          <div className="mt-8 grid grid-cols-1 justify-items-center items-center gap-8 lg:grid-cols-2">
            {events.map((event) => {
              return (
                <Event
                  key={event.id}
                  title={event.title}
                  description={event.description}
                  src={event.image}
                  href={event.href}
                />
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
