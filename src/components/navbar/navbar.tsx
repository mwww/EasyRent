import { Link } from 'react-router-dom'
import css from './navbar.module.scss'
import { useEffect, useState } from 'react'

export default function NavBar() {
  const [navbarClass, setNavbarClass] = useState(css.navNoBG)
  const handleScroll = () =>
    setNavbarClass(window.scrollY >= 45 ? css.navBG : css.navNoBG)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav className={`${css.nav} ${navbarClass}`}>
      <div className={`content_wrapper ${css.nav_wrap}`}>
        <Link to="/" className={`background_def ${css.logo_wrap}`}></Link>
        <ul className={css.links}>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Catalogue</Link>
          </li>
          <li>
            <Link to="">About Us</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
        <Link to="" className={css.cta}>
          <button>Rent a Car Now!</button>
        </Link>
      </div>
    </nav>
  )
}
