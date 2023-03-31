import { Link } from 'react-router-dom'
import css from './navbar.module.scss'
import { useEffect, useState } from 'react'

export default function NavBar() {
  const [navbarClass, setNavbarClass] = useState(css.navNoBG)
  const handleScroll = () =>
    setNavbarClass(window.scrollY >= 45 ? css.navBG : css.navNoBG)
  useEffect(() => {
    setNavbarClass(window.scrollY >= 45 ? css.navBG : css.navNoBG)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    {
      url: '',
      text: 'Home',
    },
    {
      url: '',
      text: 'Catalogue',
    },
    {
      url: '',
      text: 'About Us',
    },
    {
      url: '',
      text: 'Contact',
    },
  ]
  return (
    <nav className={`${css.nav} ${navbarClass} no_drag`}>
      <div className={`content_wrapper ${css.nav_wrap}`}>
        <Link to="/" className="background_def"></Link>
        <ul>
          {navLinks.map((link) => (
            <li>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <Link to="" draggable="false">
          <button>Rent a Car Now!</button>
        </Link>
      </div>
    </nav>
  )
}
