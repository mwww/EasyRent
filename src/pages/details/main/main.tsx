import css from './main.module.scss'

import Bg from './bg/bg'

import type { CarData } from '../details'
import Appointment from './appointment/appointment'

interface Props {
  carData: CarData
}

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
  return (
    <main className={`content_wrapper ${css.main}`}>
      <Bg imgUrl="" />
      <div className={css.car_detail}>
        <div></div>
        <div>
          <h3>{carData.model}</h3>
          <p>{carData.brand}</p>
        </div>
      </div>
      <Appointment />
    </main>
  )
}
