import React, { useState } from 'react'

export default function Accordion() {
  const [accordion1Open, setAccordion1Open] = useState(true)
  const [accordion2Open, setAccordion2Open] = useState(false)
  const [accordion3Open, setAccordion3Open] = useState(false)

  const toggleAccordion1 = () => {
    setAccordion1Open(!accordion1Open)
  }

  const toggleAccordion2 = () => {
    setAccordion2Open(!accordion2Open)
  }

  const toggleAccordion3 = () => {
    setAccordion3Open(!accordion3Open)
  }
  return (
    <section
      className="px-4 py-8 md:px-16"
      id="accordion-collapse"
      data-accordion="collapse"
    >
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl pb-2 font-semibold">FAQ's</h1>
        <p className="text-xl md:text-2xl text-gray-500">
          If you have a question look around through our FAQ below.
        </p>
      </div>
      <div className="mt-4">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
            onClick={toggleAccordion1}
          >
            <span>What is the Registration Fees?</span>
            <svg
              data-accordion-icon
              className={`w-6 h-6 shrink-0 ${
                !accordion1Open ? '' : 'rotate-180'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`${accordion1Open ? 'block' : 'hidden'}`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200">
            <ul className="mb-2 text-gray-500">
              <li>
                Participating in{' '}
                <span className="font-semibold">
                  single event except food feast
                </span>
                : Rs. 100
              </li>
              <li>
                Participating{' '}
                <span className="font-semibold">only in food feast</span>: Rs.
                150
              </li>
              <li>
                Participating{' '}
                <span className="font-semibold">
                  in all events except food feast
                </span>
                : Rs. 200
              </li>
              <li>
                Participating{' '}
                <span className="font-semibold">
                  in all events including food feast
                </span>
                : Rs. 250
              </li>
            </ul>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 "
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
            onClick={toggleAccordion2}
          >
            <span>Are UPI payments supported?</span>
            <svg
              data-accordion-icon
              className={`w-6 h-6 shrink-0 ${
                accordion2Open ? 'rotate-180' : ''
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          aria-labelledby="accordion-collapse-heading-2"
          className={`${accordion2Open ? 'block' : 'hidden'}`}
        >
          <div className="p-5 border border-b-0 border-gray-200">
            <p className="mb-2 text-gray-500">UPI payments are supported.</p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
            onClick={toggleAccordion3}
          >
            <span>
              Will the fees paid for the events be refunded in case I fail to
              attend?
            </span>
            <svg
              data-accordion-icon
              className={`w-6 h-6 shrink-0 ${
                accordion3Open ? 'rotate-180' : ''
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className={`${accordion3Open ? 'block' : 'hidden'}`}
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="p-5 border border-t-0 border-gray-200">
            <p className="mb-2 text-gray-500">
              Fees once paid, is strictly non-refundable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
