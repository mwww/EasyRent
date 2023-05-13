import React from 'react'
import css from './sidebar.module.scss'
import { Link } from 'react-router-dom'
import { BsPersonCircle} from 'react-icons/bs'
function sidebar() {
  return (
    <div className={css.slider} >
    <div>
      <h1>Hallo</h1>
    </div>
    <div className={css.personSide}>
        <BsPersonCircle size={"70px"}  />
    </div>
    <div className={css.menu}>
        <ul>
            <Link to={"/admin"}>
                <li>
                    Cars
                </li>
            </Link>
            <Link to={"/admin"}>
                <li>
                    Transmission
                </li>
            </Link>
            <Link to={"/admin"}>
                <li>
                    User
                </li>
            </Link>
        </ul>
    </div> 
  </div>
  )
}

export default sidebar