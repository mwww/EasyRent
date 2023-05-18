import css from './carCards.module.scss'

import type { CarsData } from '../main'
import { Link } from 'react-router-dom'

interface Props {
  CarsData: CarsData[]
}

export default function CarCards(props: Props) {
  // console.log(props.CarsData && props.CarsData[0].CarData.Transmissions)

  return (
    <section className={css.cards}>
      {props.CarsData.map((car, index) => (
        <div
          className={`background_def ${css.card}`}
          style={{
            backgroundImage: `url(/imgs/cars/${car.EasyRentData.Imgs[0]})`,
          }}
          key={index}
        >
          <div
            className="background_def"
            style={{
              backgroundImage: `url(/imgs/cars/${car.EasyRentData.Imgs[0]})`,
            }}
          ></div>
          <div className={css.description}>
            <div>
              <h3>{car.CarData.Model}</h3>
              <p>{car.CarData.Brand}</p>
            </div>
            <div>
              <div>
                <p>
                  {/*

                    ===
                      DOCS.
                      DO NOT REMOVE!
                    ===

                    okay, this one is so complex that it makes my head explodes multiple times.
                    so here's what's going on, we want to get all the transmissions for all cars and format it.
                    to do that, we need to get all the transmissions and format it one-by-one.

                    how do we do that? so glad you asked!
                    we need to map the transmission array from individual car using `Object.entries`
                    we use `Object.entries` because it resolve the type error that we getting when we use `.map`
                    we don't remember what the error says tho...
                    NOTE: if you want to try using `.map` instead of `Object.entries` you need to change `tOG[1]` to only `tOG`
                          that's because `Object.entries` baked in the index number into the array. (I debug this for hours, smh!)

                    then we need to get the key for the current transmission. we do it using `Object.keys`
                    and then we check if the key is empty or not, if it's not, we get the first one,
                    because that's should be the only one entry we cares about. after that we get the object's value.
                    we store the final key and value to 2 separate variables which is tKey and tVal respectively.

                    we done with it, we now just need to format it. and the code is pretty much self explainable.
                  */}
                  {Object.entries(car.CarData.Transmissions)
                    .map((tOG: any, index: any) => {
                      const t = tOG[1]
                      const S = (v: any) => String(v)
                      const tKeys = Object.keys(t)
                      const tKey = tKeys.length !== 0 ? tKeys[0] : ''
                      const tKeyAbr = tKey === 'AT' ? 'Auto' : 'Manual'
                      const tVal = tKey ? (t[tKey] === 1 ? '' : t[tKey]) : ''

                      let tR: String =
                        tVal === '' ? S(tKeyAbr) : `${tVal} Speed ${tKeyAbr}`
                      tR +=
                        index + 1 === car.CarData.Transmissions.length
                          ? '.'
                          : ', '

                      return tR
                    })
                    .join('')}
                </p>
                <p>{car.CarData.Engine}.</p>
                <p>{`${car.CarData.Power.HP} hp, ${car.CarData.Power.TQ} lb-ft.`}</p>
              </div>
              <div className={css.action}>
                <Link to={`/details/${car.EasyRentData.ID}`} draggable="false">
                  <button>Rent This Car Now!</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
