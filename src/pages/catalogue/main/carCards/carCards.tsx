import css from './carCards.module.scss'

export default function CarCards() {
  const imgs = ['/imgs/cars/1.jpg']
  return (
    <div className={css.cards}>
      <div
        className={`background_def ${css.card}`}
        style={{ backgroundImage: `url(${imgs[0]})` }}
      >
        <div
          className="background_def"
          style={{ backgroundImage: `url(${imgs[0]})` }}
        ></div>
        <div className={css.description}>
          <div>
            <h3>Porsche 911</h3>
            <p>Porsche</p>
          </div>
          <div>
            <p>8-speed AT, 7-speed MT.</p>
            <p>3.0-liter twin-turbocharged flat-six.</p>
            <p>572 hp, 553 lb-ft.</p>
          </div>
          <div className={css.action}>
            <a href="" draggable="false">
              <button>Rent Now!</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
