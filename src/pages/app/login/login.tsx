import React from 'react'

import UniversalHero from '../../../components/universalHero/universalHero';
import NavBar from '../../../components/navbar/navbar'
import Footer from '../../../components/footer/footer'
import Main from './main/main';

const login = () => {
  return (
    <>
        <NavBar />
        {/* <UniversalHero text='Login Pages'/> */}
        <Main />
        {/* <Footer /> */}
    </>
  )
}

export default login