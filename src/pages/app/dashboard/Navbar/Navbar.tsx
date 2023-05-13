import css from './navDash.module.scss'
import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
import Sidebar from '../SideBar/sidebar'

function Navbar() {
  const [navbarClass, setNavbarClass] = useState(css.navNoBG)
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = () =>
    setNavbarClass(window.scrollY >= 45 ? css.navBG : css.navNoBG)
  useEffect(() => {
    setNavbarClass(window.scrollY >= 45 ? css.navBG : css.navNoBG)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div>
        <nav className={`${css.nav} ${navbarClass} no_drag`}>
      <div className={`content_wrapper ${css.nav_wrap}`}>
        <Link to={"/"}>
          
        </Link>
        <Link to={"/"} className={css.profile}>
          <BsFillPersonFill size={"20px"} />
        </Link>
      </div>
    </nav>
    
    </div>
      // <div className={css.boxNav} >
      //   <div className={css.navWrap}>
      //     <Link to={"/"} >
      //       <BsFillGridFill size={"20px"}/>
      //     </Link>
      //     <div>
      //           <Link to={"/"} className={css.profile}>
      //               <BsFillPersonFill />
      //           </Link>

      //     </div>
      //   </div>
      // </div>
      
  )
}

export default Navbar