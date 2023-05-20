import React, { useEffect } from 'react'

import NavBar from '../../../components/navbar/navbar'
import Main from './main/main'
import { Navigate } from 'react-router-dom';

const login = () => {

  useEffect(() => {
    document.title = 'Login - EasyRent'
  }, [])

  return (
    <>
      <NavBar />
      <Main />
    </>
  )
}

export default login
