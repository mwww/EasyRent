import React, { useEffect, useState } from 'react'
import css from './main.module.scss'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import validator from 'validator';


const main = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [emailError, setEmailError] = useState('')
  // const [passwordError, setPasswordError] = useState('')
  const navigate = useNavigate();
  
  const Register = async (e:any) =>{
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Password dan konfirmasi password tidak sama');
      return;
    }

    try {
        await axios.post('http://localhost:3000/user/users', {
            name: name,
            email: email, 
            password: password,
            confirmPassword: confirmPassword
        });

        navigate('/login')
    } catch (error:any) {
        if(error.response) {
            setMsg(error.response.data.msg);
        }
        
    }

}

const validateEmail = (e:any) => {
  e.preventDefault();
  var email = e.target.value

  if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Enter valid Email!')
    }
}


  useEffect(() => {
    document.title = 'Login - EasyRent'
  }, [])

  return (
    <main className={`${css.bg} background_def`}>
      <div className={css.container}>
        <div className={css.form}>
        <h1>Register</h1>
        <p>Please enter your details.</p>
        <form className='' onSubmit={Register}>
          <label htmlFor="Name"></label>
          <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
          <label htmlFor="Email"></label>
          <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} onKeyUpCapture={(e) => validateEmail(e)}/>
          <span>{emailError}</span>
          <label htmlFor="Password"></label>
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <label htmlFor="Password"></label>
          <input type="password" placeholder='Confirm Password'value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)}/>
        <div className={css.btn}>
            <button>Register</button>
        </div>
        </form>
        <div className={css.register}>
        <p className="">Already have an account? <a href="/login" className={css.text}>Login</a></p>
        </div>
        </div>
      </div>
    </main>
  )
}

export default main
