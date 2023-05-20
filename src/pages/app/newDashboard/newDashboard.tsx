import { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';

import css from './newDashboard.module.scss'
import axios from 'axios'

export default function NewDashboard() {
  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const navigate = useNavigate()

  const logout = async () => {
    try {
      await axios.delete('http://localhost:3000/user/logout')
      removeCookie('token')
      navigate('/')
    } catch (error) {
      console.log(error);
      
    }
  }


  useEffect(() => {
    document.title = 'New Dashboard - EasyRent'
  }, [])
  return (
    <div className={css.container}>
      <div></div>
      <aside>
        <div>
          <div className={css.logo_container}>
            <Link to="" className={`background_def ${css.logo}`}></Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="overview">Overview</Link>
              </li>
              <li>
                <Link to="cars">Cars</Link>
              </li>
              <li>
                <Link to="appointments">Appointments</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div></div>
          <p>nama user</p>
          <button onClick={logout}>logOut</button>
        </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
