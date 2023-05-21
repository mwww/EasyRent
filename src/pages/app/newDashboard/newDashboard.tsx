import { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';

import css from './newDashboard.module.scss'
import axios from 'axios'

export default function NewDashboard() {
  const [cookies, setCookie, removeCookie] = useCookies(['token','refreshToken'])
  const navigate = useNavigate()

  const token = cookies.token
  const refToken = cookies.refreshToken

  const logout = async () => {
    try {
      await axios.delete('http://localhost:3000/user/logout')
        removeCookie('token')
        removeCookie('refreshToken')
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
