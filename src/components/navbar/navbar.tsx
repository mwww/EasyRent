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

  interface NavLinks {
    id: any
    url: any
    Text: String
  }
  const navLinks: NavLinks[] = [
    {
      id: 1,
      url: '/',
      Text: 'Home',
    },
    {
      id: 2,
      url: '/catalogue',
      Text: 'Catalogue',
    },
    {
      id: 3,
      url: '/aboutus',
      Text: 'About Us',
    },
    {
      id: 4,
      url: '/dummy-page',
      Text: 'Contact',
    },
  ]
  return (
    <nav className={`${css.nav} ${navbarClass} no_drag`}>
      <div className={`content_wrapper ${css.nav_wrap}`}>
        <Link to="/" className="background_def"></Link>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.url}>{link.Text}</Link>
            </li>
          ))}
        </ul>
        <Link to="/login" draggable="false">
          <button>Rent a Car Now!</button>
        </Link>
      </div>
    </nav>
  )
}
