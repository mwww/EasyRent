import css from './review.module.scss'

export default function Review() {
  return (
    <section className={`background_def ${css.review}`}>
      <div>
        <h3>Don't take our word…</h3>
        <p>Take theirs!</p>
      </div>
      <div className={css.cards}>
        <div className={css.card}>
          {/* Review card here */}
          <img src="/pp/1.png" alt="" className="no_drag" draggable="false" />
          <div>
            <h5>Alison Something</h5>
            <p>The service is amazingly cool!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
