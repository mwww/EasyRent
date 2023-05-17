import React, { useEffect } from 'react'

// External Components
import UniversalHero from '../../components/universalHero/universalHero'
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

// internal Components
import Main from './main/main'
import { useParams } from 'react-router-dom'

export default function Details() {
  const params = useParams()
  useEffect(() => {
    document.title = 'Detail - EasyRent'
  }, [])
  return (
    <>
      <NavBar />
      <UniversalHero text={`${JSON.stringify(params)}`} />
      <Main />
      <Footer />
    </>
  )
}
