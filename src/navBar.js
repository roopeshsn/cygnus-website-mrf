import './navBar.css'
import Button from '@mui/material/Button'

function NavBar() {
  return (
    <header className="bg-white h-24 hidden md:flex justify-end">
      <a
        href=""
        className="flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
      >
        <img
          className=""
          src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png"
          alt=""
        />
      </a>

      <nav
        id="navBar"
        className="header-links contents font-semibold text-base lg:text-lg"
      >
        <ul className="flex items-center mr-4 xl:mr-8 ml-auto">
          <li className="navLinks p-3 xl:p-6 active">
            <a href="">
              <span>Home</span>
            </a>
          </li>
          <li className="navLinks p-3 xl:p-6">
            <a href="">
              <span>Events</span>
            </a>
          </li>
          <li className="navLinks p-3 xl:p-6">
            <a href="">
              <span>Contacts</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center px-4 lg:px-6 xl:px-8">
        <Button id="my-button" variant="contained">
          Register
        </Button>
      </div>
    </header>
  )
}

export default NavBar
