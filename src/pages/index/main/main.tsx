// Components
import Superiority from './superiority/superiority'
import Featured from './featured/featured'
import Review from './review/review'
import ActionCard from './actionCard/actionCard'

// Style
import style from './main.module.scss'

export default function Main() {
  return (
    <main className={`content_wrapper ${style.main} `}>
      <Superiority />
      <Featured />
      <Review />
      <ActionCard />
    </main>
  )
}
