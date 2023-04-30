import React from 'react'
import Event from './Event'
import partying from '../assets/images/partying.jpg'

export default function Events() {
  return (
    <section className="container px-4 py-8 md:px-8">
      <h1 className="text-4xl font-bold">Events</h1>
      <div className="mt-4 grid gird-cols-1 row-auto gap-2 md:grid-cols-2 lg:grid-cols-3">
        <Event src={partying} href="/event/food" />
        <Event src={partying} href="/event/food" />
        <Event src={partying} href="/event/food" />
        <Event src={partying} href="/event/food" />
      </div>
    </section>
  )
}
