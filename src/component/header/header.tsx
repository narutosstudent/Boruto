import { useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import './header.css'
import '../../App.css'
import { DarkMode } from '../theme/darkMode'

export function Header() {
  const location = useLocation()
  const isHome =
    location.pathname === '/' || location.pathname === '/create/post'
  const [isOpen, setIsOpen] = useState(false)
  const [URL, setURL] = useState(
    'https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1659089761812%2FfsOct5gl6.png&w=1920&q=75'
  )

  return (
    <header className="header">
      <Link to="/">
        {' '}
        <h1 className="header__logo">Boruto</h1>
      </Link>

      <aside className="aside">
        <Link
          to="/create/post"
          className="aside__write--button"
          aria-label="write a blog post"
        >
          <FaPen className="pen" /> Write
        </Link>

        <DarkMode />

        {isHome && (
          <img
            onClick={() => setIsOpen(true)}
            src={URL}
            alt="no profile"
            className="aside__profile"
          />
        )}

        {isOpen === true && (
          <div className="aside__wrapper">
            <img
              className="aside__wrapper--profile"
              src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1659089761812%2FfsOct5gl6.png&w=1920&q=75"
              alt="profile"
            />
            <h2 className="aside__wrapper--info">
              Sign up or log in to your Boruto account.
            </h2>
            <p className="aside__wrapper--text">
              Takes less than a few seconds.
            </p>
            <div className="aside__wrapper--buttons">
              <Link to="/signup" onClick={() => setIsOpen(false)}>
                Sign up
              </Link>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                Log in
              </Link>
            </div>
          </div>
        )}
      </aside>
    </header>
  )
}
