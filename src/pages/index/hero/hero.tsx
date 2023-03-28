import css from './hero.module.scss'

export default function Hero() {
  return (
    <header className={css.hero}>
      <div className={`content_wrapper ${css.wrap}`}>
        <div>
          <div className={`background_def ${css.bg}`}></div>
        </div>
        <div className={css.tagline}>
          Rent Any Cars The <span>Easy Way!</span>
        </div>
      </div>
    </header>
  )
}
