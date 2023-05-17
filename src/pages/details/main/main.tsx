import css from './main.module.scss'

import Bg from './bg/bg'

import type { CarData } from '../details'

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
    <main className={`content_wrapper`}>
      {/* <h3>Oh, Hi!</h3>
      <p>
        I think the page you're looking for is snot made yet, so we use this as
        a place holder. Hope you don't get mad!
      </p> */}
      <Bg imgUrl="" />
      <div className={css.car_detail}>
        <div></div>
        <div></div>
      </div>
    </main>
  )
}
