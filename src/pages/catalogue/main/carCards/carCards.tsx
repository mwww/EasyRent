import css from './carCards.module.scss'

export default function CarCards() {
  const imgs = ['/imgs/cars/1.jpg']

  interface CarData {
    Brand: string
    Model: string
    ReleaseYear: number
    Transmissions: {
      [key: string]: string
    }
    Engine: string
    Power: {
      HP: number
      TQ: number
    }
  }
  interface EasyRentData {
    ID: number
    PopularityIndex: number
    Imgs: string[]
  }
  interface CarsData {
    EasyRentData: EasyRentData
    CarData: CarData
  }

  const carsData: CarsData[] = [
    // const carsData = [

    {
      EasyRentData: {
        ID: 1,
        PopularityIndex: 6.5,
        Imgs: ['2.jpg'],
      },
      CarData: {
        Brand: 'Chevrolet',
        Model: 'Corvette Stingray',
        ReleaseYear: 2023,
        Transmissions: {
          AT: '8-speed dual-clutch',
          MT: '7-speed',
        },
        Engine: '6.2-liter naturally aspirated V8',
        Power: {
          HP: 495,
          TQ: 470,
        },
      },
    },
    {
      EasyRentData: {
        ID: 2,
        PopularityIndex: 8.7,
        Imgs: ['1.jpg'],
      },
      CarData: {
        Brand: 'Porsche',
        Model: 'Porsche 718 Cayman GT4',
        ReleaseYear: 2023,
        Transmissions: {
          MT: '6-speed',
        },
        Engine: '4.0-liter naturally aspirated flat-six',
        Power: {
          HP: 414,
          TQ: 309,
        },
      },
    },
    {
      EasyRentData: {
        ID: 3,
        PopularityIndex: 7.9,
        Imgs: ['3.jpg'],
      },
      CarData: {
        Brand: 'Ford',
        Model: 'Mustang Mach-E GT',
        ReleaseYear: 2022,
        Transmissions: {
          AT: 'Electric',
        },
        Engine: 'Dual electric motors',
        Power: {
          HP: 480,
          TQ: 634,
        },
      },
    },
    {
      EasyRentData: {
        ID: 4,
        PopularityIndex: 1,
        Imgs: ['1.jpg'],
      },
      CarData: {
        Brand: 'Porsche',
        Model: 'Porsche 911',
        ReleaseYear: 2022,
        Transmissions: {
          AT: '8-speed',
          MT: '7-speed',
        },
        Engine: '3.0-liter twin-turbocharged flat-six',
        Power: {
          HP: 572,
          TQ: 553,
        },
      },
    },
    {
      EasyRentData: {
        ID: 5,
        PopularityIndex: 9.2,
        Imgs: ['1.jpg'],
      },
      CarData: {
        Brand: 'Lamborghini',
        Model: 'Huracán STO',
        ReleaseYear: 2022,
        Transmissions: {
          AT: '7-speed dual-clutch',
        },
        Engine: '5.2-liter naturally aspirated V10',
        Power: {
          HP: 640,
          TQ: 417,
        },
      },
    },
  ]

  return (
    <section className={css.cards}>
      {carsData.map((car) => (
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
