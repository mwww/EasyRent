import css from './actionCard.module.scss'

export default function ActionCard() {
  return (
    <section className={css.actionCard}>
      <div className={css.blurGrad}></div>
      <div className={css.texts}>
        Click <a href="">here</a> when you're ready to rent a car!
        <h3></h3>
      </div>
    </section>
  )
}
