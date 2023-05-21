import React, { useEffect, useState } from 'react'
import css from './main.module.scss'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const main = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const navigate =useNavigate()
  const [cookies, setCookie] = useCookies(['token','refreshToken'])
  

  const auth = async (e: any) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3000/user/login', {
        email: email,
        password: password,
      })
      .then(response => {
        const token = JSON.stringify(response.data.accessToken)
        const refToken = JSON.stringify(response.data.refreshToken)

        setCookie('refreshToken', refToken, { path: '/' })
        setCookie('token', token, { path: '/' })

      })
      if (e) {
        navigate('/new/admin')
      } else {
        navigate('/login')
      }
    } catch (error: any) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }
  return (
    <main className={`${css.main} background_def`}>
      <div className={css.container}>
        <div className={css.side}>
          <div>
            <h1>Welcome to EasyRent!</h1>
            <p>Please enter your details.</p>
          </div>
          <div>
            <p>Don't have an account?</p>
            <Link to={'/register'}>Register now</Link>
          </div>
        </div>
        <div className={css.content}>
          {/* <p>fill this form to login</p> */}
          <form className="" onSubmit={auth}>
            <label htmlFor="Email"></label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="Password"></label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Log In</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default main
