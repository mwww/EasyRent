import css from './main.module.scss'

import Bg from './bg/bg'

import type { CarData } from '../details'
import Appointment from './appointment/appointment'

interface Props {
  carData: CarData
}

// const

export default function Main(props: Props) {
  const carData = props.carData
  if (!carData) {
    return (
      <main className={`content_wrapper`}>
        <h3>Error!</h3>
        <p>IDK why...</p>
        <p>but probably because carData is empty.</p>
      </main>
    )
  }
  const toCurrency = (x: any) => {
    return `Rp. ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
  }
  return (
    <main className={`content_wrapper ${css.main}`}>
      <Bg imgUrl={`${carData.images[0]}`} />
      <section className={css.car_detail}>
        <div
          className="background_def"
          style={{ backgroundImage: `url("/imgs/cars/${carData.images[0]}")` }}
        ></div>
        <div>
          <h3>{carData.model}</h3>
          <p>{carData.brand}</p>
          {/* <p>{JSON.stringify(carData)}</p> */}
          <div>
            <p>
              {carData.transmissions.map(
                (t) =>
                  `${t.speed}-Speed ${
                    t.transmission_type === 'AT' ? 'Auto' : 'Manual'
                  }`
              )}
            </p>
            <p>{carData.engine}.</p>
            <p>{`${carData.HP} hp, ${carData.TRQ} lb-ft.`}</p>
          </div>
          <h3>{toCurrency(carData.price)}</h3>
        </div>
      </section>
      <Appointment id={carData.id_mobil} />
    </main>
  )
}
