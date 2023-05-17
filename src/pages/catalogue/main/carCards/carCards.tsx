import css from './carCards.module.scss'

import type { CarsData } from '../main'

interface Props {
  CarsData: CarsData[]
}

export default function CarCards(props: Props) {
  return (
    <section className={css.cards}>
      {props.CarsData.map((car) => (
        <div
          className={`background_def ${css.card}`}
          style={{
            backgroundImage: `url(/imgs/cars/${car.EasyRentData.Imgs[0]})`,
          }}
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
                  {Object.entries(car.CarData.Transmissions)
                    .map((t: any, index: any) => {
                      const S = (v: any) => String(v)
                      const tKeys = Object.keys(t)
                      const tKey = tKeys.length !== 0 ? tKeys[0] : ''
                      const tKeyAbr = tKey === 'AT' ? 'Auto' : 'Manual'
                      const tVal = tKey ? (t[tKey] === 1 ? '' : t[tKey]) : ''

                      let tR: String = ''
                      tR +=
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
                <a href={`/details/${car.EasyRentData.ID}`} draggable="false">
                  <button>Rent This Car Now!</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
