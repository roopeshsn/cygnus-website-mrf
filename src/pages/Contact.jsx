import React from 'react'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="mb-4 text-center text-gray-500 sm:text-xl">
          Got a technical issue? Want to send feedback? Let us know.
        </p>
        <p className="text-center font-semibold text-lg text-gray-700 md:text-xl">
          abishek2k16@gmail.com
        </p>
      </div>
      <Accordion />
      <Footer />
    </>
  )
}
