import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

import css from './newDashboard.module.scss'

export default function NewDashboard() {
  useEffect(() => {
    document.title = 'Dashboard - EasyRent'
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
        </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
