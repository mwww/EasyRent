import css from './carCards.module.scss'

import { CarsData } from '../main'

interface Props {
  CarsData: CarsData[]
}

export default function CarCards(props: Props) {
  const imgs = ['/imgs/cars/1.jpg']

  // console.log(props.CarsData.map((d) => d))

  // const carsData = props.CarsData.map((d, CarData) => d.CarData.Transmissions)
  const carsData = props.CarsData.map((d) => {
    let TransmissionString: String

    // for (var i = 0; i < 9; i++) {
    //   console.log(i)
    //   // more statements
    // }

    // TransmissionString = d.CarData.Transmissions.map((t: any, index: any) => {
    //   const S = (v: any) => String(v)
    //   let tR: String = ''
    //   const tKeys = Object.keys(t)
    //   const tKey = tKeys.length !== 0 && tKeys[0]
    //   let tVal
    //   if (tKey) {
    //     const tValTMP = t[tKey]
    //     tVal = tValTMP === 1 ? '' : tValTMP
    //   }
    //   // console.log('t', index, tKey)
    //   // console.log('tVal', index, tVal)

    //   if (tVal === '') {
    //     tR += S(tKey)
    //   } else {
    //     tR += `${S(tKey)} ${S(tVal)}`
    //   }
    //   if (index + 1 === d.CarData.Transmissions.length) {
    //     tR += '.'
    //   } else {
    //     tR += ', '
    //   }

    //   return tR
    // }).join('')
    TransmissionString = d.CarData.Transmissions.map((t: any, index: any) => {
      const S = (v: any) => String(v)
      const tKeys = Object.keys(t)
      const tKey = tKeys.length !== 0 && tKeys[0]
      const tVal = tKey ? (t[tKey] === 1 ? '' : t[tKey]) : ''

      let tR: String = ''
      tR += tVal === '' ? S(tKey) : `${tKey} ${tVal}`
      tR += index + 1 === d.CarData.Transmissions.length ? '.' : ', '

      return tR
    }).join('')

    console.log('TransmissionString', TransmissionString)

    let r: CarsData = {
      CarData: {
        Brand: 'Porsche',
        Engine: d.CarData.Engine,
        Model: d.CarData.Model,
        Power: d.CarData.Power,
        ReleaseYear: d.CarData.ReleaseYear,
        // Transmissions: Array [ {…}, {…} ]
        // TransmissionString:
      },
    }
    console.log(d)
    return r
  })

  console.log('current testing', carsData)

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
                  {/* {Object.keys(car.CarData.Transmissions).map(
                    (prop, index) =>
                      `${Object.keys(car.CarData.Transmissions[prop])} ${
                        car.CarData.Transmissions[prop][
                          Object.keys(car.CarData.Transmissions[prop])
                        ]
                      }${
                        index !==
                        Object.keys(car.CarData.Transmissions).length - 1
                          ? ', '
                          : '.'
                      }`
                  )} */}
                  {/* {car.CarData.Transmissions.map(
                    (t: CarsData, index: Number) =>
                      `
                      ${Object.keys(car.CarData.Transmissions[index])}
                      ${
                        // car.CarData.Transmissions[index][
                        //   Object.keys(car.CarData.Transmissions[index])
                        // ]
                        car.CarData.Transmissions[index][
                          Object.keys(car.CarData.Transmissions[index])
                        ] === 1
                          ? ''
                          : car.CarData.Transmissions[index][
                              Object.keys(car.CarData.Transmissions[index])
                            ]
                      }
                    `
                  )} */}
                  {/* {car.CarData.Transmissions.map(
                    (t: CarsData, index: any) =>
                      `${Object.keys(car.CarData.Transmissions[index])}${
                        car.CarData.Transmissions.length !== index + 1
                          ? t[Object.keys(car.CarData.Transmissions[index])] ===
                            1
                            ? ''
                            : t[Object.keys(car.CarData.Transmissions[index])] +
                              ', '
                          : '.'
                      }`
                    // ${
                    //   t[Object.keys(car.CarData.Transmissions[index])] === 1
                    //     ? ''
                    //     : t[Object.keys(car.CarData.Transmissions[index])]
                    // }
                  )} */}
                  {car.CarData.Transmissions.map((t: any, index: any) => {
                    const S = (v: any) => String(v)
                    const tKeys = Object.keys(t)
                    const tKey = tKeys.length !== 0 ? tKeys[0] : ''
                    const tKeyAbr = tKey === 'AT' ? 'Auto' : 'Manual'
                    const tVal = tKey ? (t[tKey] === 1 ? '' : t[tKey]) : ''

                    let tR: String = ''
                    tR += tVal === '' ? S(tKeyAbr) : `${tVal} Speed ${tKeyAbr}`
                    tR +=
                      index + 1 === car.CarData.Transmissions.length
                        ? '.'
                        : ', '

                    return tR
                  }).join('')}
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
    </section>
  )
}
