import React from 'react'
import { Link } from 'react-router-dom'

export default function Event({ src, href, title, description }) {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
      <img
        className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={src}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <Link to={href}>
          <button className="px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-zinc-900 focus:ring-4 focus:outline-none focus:ring-slate-300">
            Read more
          </button>
        </Link>
      </div>
    </div>
  )
}

// <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//   <img className="rounded-t-lg max-h-32" src={src} alt="" />
//   <div className="p-5">
//     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//       Noteworthy technology acquisitions 2021
//     </h5>
//     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//       Here are the biggest enterprise technology acquisitions of 2021 so
//       far, in reverse chronological order.
//     </p>

//   </div>
// </div>
