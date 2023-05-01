import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Events from '../components/Events'
import Footer from '../components/Footer'
import Accordion from '../components/Accordion'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Events />
      <Accordion />
      <Footer />
    </>
  )
}
