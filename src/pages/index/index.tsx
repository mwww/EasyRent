// Components
import NavBar from '../../components/navbar/navbar'

// Pages
import Hero from './hero/hero'
import Main from './main/main'

// Style
import style from './index.module.scss'

export default function Index() {
  return (
    <>
      <NavBar />
      <Hero />
      <Main />
    </>
  )
}
