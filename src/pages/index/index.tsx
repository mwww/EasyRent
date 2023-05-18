import { useEffect } from 'react'

// External Components
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

// internal Components
import Hero from './hero/hero'
import Main from './main/main'

export default function Index() {
  useEffect(() => {
    document.title = 'EasyRent'
  }, [])
  return (
    <>
      <NavBar />
      <Hero />
      <Main />
      <Footer />
    </>
  )
}
