// Components
import Superiority from './superiority/superiority'

// Style
import style from './main.module.scss'

export default function Main() {
  return (
    <main className={`content_wrapper ${style.main} `}>
      <Superiority />
    </main>
  )
}
