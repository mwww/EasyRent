import React, { useEffect, useState } from 'react'
import css from './main.module.scss'
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';


const main = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const auth = async (e) =>{
      e.preventDefault();
      try {
          await axios.post('http://localhost:3000/api/login', {
              email: email, 
              password: password
          });
          navigate('/admin')
      } catch (error) {
          if(error.response) {
              setMsg(error.response.data.msg);
          }
          
      }
  }

  useEffect(() => {
    document.title = 'Login - EasyRent'
  }, [])
  return (
    <main className={`${css.bg} background_def`}>
      <div className={css.container}>
        <div className={css.form}>
        <h1>Welcome</h1>
        <p>Please enter your details.</p>
        <form className='' onSubmit={auth}>
          <label htmlFor="Email"></label>
          <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="Password"></label>
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <div className={css.btn}>
            <button>Log In</button>
        </div>
        </form>
        <div className={css.register}>
        <p>Don't have an account ?</p>
        <Link to={"/register"}>
        <a className={css.text}>Register</a>
        </Link>
        </div>
        </div>
      </div>
    </main>
  )
}

export default main
