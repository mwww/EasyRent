import React, { useEffect } from 'react'

// External Components
import UniversalHero from '../../components/universalHero/universalHero'
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

// internal Components
import Main from './main/main'

export default function Checkout() {
  useEffect(() => {
    document.title = 'Checkout - EasyRent'
  }, [])
  return (
    <>
      <NavBar />
      <UniversalHero text="Checkout Page" />
      <Main />
      <Footer />
    </>
  )
}
