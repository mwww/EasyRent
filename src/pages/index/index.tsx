import { useEffect } from 'react'

// External Components
import HoverEffect from '../../components/hoverEffect/hoverEffect'
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import LegalStuff from '../../components/legalStuff/legalStuff'

// internal Components
import Hero from './hero/hero'
import Main from './main/main'

export default function Index() {
  useEffect(() => {
    document.title = 'EasyRent'
  }, [])
  return (
    <>
      {/* <HoverEffect /> */}
      <NavBar />
      <Hero />
      <Main />
      <Footer />
      {/* <LegalStuff /> */}
    </>
  )
}
