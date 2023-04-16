import css from './universalHero.module.scss'

type UniversalHeroProps = {
  text: string
}

export default function UniversalHero(props: UniversalHeroProps) {
  const { text } = props
  // console.log(text)

  return (
    <header className={`content_wrapper ${css.header}`}>
      <div className={`${css.header_content}`}>
        <h1>{text ? text : 'Header'}</h1>
      </div>
    </header>
  )
}
