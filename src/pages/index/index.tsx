// Components
import HoverEffect from '../../components/hoverEffect/hoverEffect'
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import LegalStuff from '../../components/legalStuff/legalStuff'

// Pages
import Hero from './hero/hero'
import Main from './main/main'

// Style
import style from './index.module.scss'

export default function Index() {
  return (
    <>
      {/* <HoverEffect /> */}
      <NavBar />
      <Hero />
      <Main />
      <Footer />
      <LegalStuff />
    </>
  )
}
