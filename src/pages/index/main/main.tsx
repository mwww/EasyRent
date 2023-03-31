// Components
import Superiority from './superiority/superiority'
import Featured from './featured/featured'
import Review from './review/review'

// Style
import style from './main.module.scss'

export default function Main() {
  return (
    <main className={`content_wrapper ${style.main} `}>
      <Superiority />
      <Featured />
      <Review />
    </main>
  )
}
