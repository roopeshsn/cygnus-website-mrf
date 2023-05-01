import React from 'react'
import Event from './EventCard'
import { events } from '../data/events'
import { Link } from 'react-router-dom'

export default function Events() {
  return (
    <section className="px-4 py-8">
      <div>
        <h1 className="text-4xl font-bold text-center">Events</h1>
        <div className="mt-8 grid grid-cols-1 justify-items-center items-center gap-4 lg:grid-cols-2">
          {events.slice(0, 6).map((event) => {
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
        <div className="text-center mt-12">
          <Link to="/events">
            <div className="inline-flex items-center px-5 py-3 text-lg md:text-xl font-medium text-center text-white bg-primary rounded-lg hover:bg-zinc-900 focus:ring-4 focus:outline-none focus:ring-slate-300">
              View All Events
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
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
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
