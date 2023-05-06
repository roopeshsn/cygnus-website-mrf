import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser, signout } = useAuth()
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Cygnus23
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? '' : 'hidden'}`}
          id="navbar-default"
        >
          <ul className="font-medium flex justify-center items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive
                    ? 'block py-2 pl-3 pr-4 text-white bg-primary rounded md:bg-transparent md:text-secondary md:p-0'
                    : 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-zinc-900 md:p-0'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={(navData) =>
                  navData.isActive
                    ? 'block py-2 pl-3 pr-4 text-white bg-primary rounded md:bg-transparent md:text-secondary md:p-0'
                    : 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-zinc-900 md:p-0'
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={(navData) =>
                  navData.isActive
                    ? 'block py-2 pl-3 pr-4 text-white bg-primary rounded md:bg-transparent md:text-secondary md:p-0'
                    : 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-zinc-900 md:p-0'
                }
              >
                Contact
              </NavLink>
            </li>
            {currentUser ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={(navData) =>
                      navData.isActive
                        ? 'block py-2 pl-3 pr-4 text-white bg-primary rounded md:bg-transparent md:text-secondary md:p-0'
                        : 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-zinc-900 md:p-0'
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={() => signout()}
                    className="py-2 text-gray-900"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={(navData) =>
                    navData.isActive
                      ? 'block py-2 pl-3 pr-4 text-white bg-primary rounded md:bg-transparent md:text-secondary md:p-0'
                      : 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-zinc-900 md:p-0'
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

// className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500"
