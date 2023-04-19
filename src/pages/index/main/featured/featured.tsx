import css from './featured.module.scss'

import lArrwShrt from './lArrwShrt.svg'
import rArrw from './rArrw.svg'

export default function Featured() {
  return (
    <section className={`background_def ${css.featured}`}>
      {/* <div>image here</div> */}
      <div className="background_def"></div>
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
          <div>
            <a href="">
              {/* <button>&lArr;</button> */}
              <img src={lArrwShrt} alt="" />
              {/* <button></button> */}
            </a>
            <a href="">
              {/* <button>&rArr;</button> */}
              <img src={rArrw} alt="" />
              {/* <button></button> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

type CardProps = {
  data: object
}

function carCard(props: CardProps) {}
