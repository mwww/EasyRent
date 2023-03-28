import { Link } from 'react-router-dom'
import css from './navbar.module.scss'
// import Logo from '../../assets/logo.svg'

export default function NavBar() {
  return (
    <nav className={css.nav}>
      <div className={`content_wrapper ${css.nav_wrap}`}>
        {/* <p>This is navbar</p> */}
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
