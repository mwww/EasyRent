import React, { useEffect } from 'react'

// External Components
import UniversalHero from '../../components/universalHero/universalHero'
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

// internal Components
import Main from './main/main'

export default function E404() {
  useEffect(() => {
    document.title = 'wait, are you lost? - EasyRent'
  }, [])
  return (
    <>
      <NavBar />
      <UniversalHero text="Whooopsie!" />
      <Main />
      <Footer />
    </>
  )
}
