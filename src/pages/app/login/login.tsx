import React, { useEffect } from 'react'

import NavBar from '../../../components/navbar/navbar'
import Main from './main/main'
import { useNavigate, Outlet, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const login = () => {

  const [cookies] = useCookies(['token','refreshToken'])
  const navigate = useNavigate();

  const token = cookies.token;
  const refToken = cookies.refreshToken
  const isAuthenticated = token && refToken ? true : false;


    if (isAuthenticated) {
      console.log(token, "token", refToken, "refToken");
      
      return <Navigate to='/new/admin' replace={true}/>
    }


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
