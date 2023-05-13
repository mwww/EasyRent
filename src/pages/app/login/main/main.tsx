import React, { useEffect } from 'react'
import css from './main.module.scss'

const main = () => {



  useEffect(() => {
    document.title = 'Login - EasyRent'
  }, [])
  return (
    <main className={`${css.bg} background_def`}>
      <div className={css.container}>
        <div className={css.form}>
        <h1>Welcome</h1>
        <p>Please enter your details.</p>
        <form className=''>
          <label htmlFor="Email"></label>
          <input type="text" placeholder='Email'/>
          <label htmlFor="Password"></label>
          <input type="password" placeholder='Password'/>
        </form>
        <div className={css.btn}>
            <button>Log In</button>
        </div>
        <div className={css.register}>
        <p>Don't have an account ?</p>
        <a className={css.text} href=''>Register</a>
        </div>
        </div>
      </div>
    </main>
  )
}

export default main
