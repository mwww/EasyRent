import css from './hoverEffect.module.scss'

export default function HoverEffect() {
  return (
    <div className={css.hoverEffect}>
      <div className={css.bg}></div>
      <div className={css.blur}></div>
    </div>
  )
}
