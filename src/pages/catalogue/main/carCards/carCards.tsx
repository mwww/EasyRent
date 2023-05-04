import css from './carCards.module.scss'

import { CarsData } from '../main'

interface Props {
  CarsData: CarsData[]
}

export default function CarCards(props: Props) {
  const imgs = ['/imgs/cars/1.jpg']

  // console.log(props.CarsData)

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
                  {Object.keys(car.CarData.Transmissions).map(
                    (prop, index) =>
                      `${car.CarData.Transmissions[prop]} ${prop}${
                        index !==
                        Object.keys(car.CarData.Transmissions).length - 1
                          ? ', '
                          : '.'
                      }`
                  )}
                </p>
                <p>{car.CarData.Engine}.</p>
                <p>
                  {`${car.CarData.Power.HP} hp, ${car.CarData.Power.TQ} lb-ft.`}
                </p>
              </div>
              <div className={css.action}>
                <a
                  href={`/app/rent?carID=${car.EasyRentData.ID}`}
                  draggable="false"
                >
                  <button>Rent This Car Now!</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <div
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
      </div> */}
    </section>
  )
}
