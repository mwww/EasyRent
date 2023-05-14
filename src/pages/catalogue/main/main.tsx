import { useEffect, useState } from 'react'
import CarCards from './carCards/carCards'

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

export default function Main() {
  const [carsData, setCarsData] = useState<CarsData[]>([]) // initialize the state with an empty array
  const [order, setOrder] = useState<string>('asc')
  const [sortBy, setSortBy] = useState<string>('id')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/cars?sortby=${sortBy}&order=${order}`
        )
        const data = (await response.json()).data
        // console.log(data)

        // console.log(data)
        // Set the sorted data
        setCarsData(
          data.map((d: any) => ({
            EasyRentData: {
              ID: d.id_mobil,
              PopularityIndex: d.popularity_idx,
              Imgs: d.images,
            },
            CarData: {
              Brand: d.brand,
              Model: d.model,
              ReleaseYear: d.release_year,
              // Transmissions: [
              //   { [d.transmissions.transmission_type]: d.transmissions.speed },
              // ],
              Transmissions: d.transmissions.map((t: any) => ({
                [t.transmission_type]: t.speed,
              })),
              Engine: d.engine,
              Power: {
                HP: d.HP,
                TQ: d.TRQ,
              },
            },
          }))
        )
        console.log('carsData', carsData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [sortBy, order]) // run whenever sortBy and order changes

  const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(event.target.value)
  }

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortBy = event.target.value
    console.log(selectedSortBy)
    setSortBy(selectedSortBy)
  }

  return (
    // TODO: replace value with backend's end points.
    // e.g. value="trq"(torque) url: `http://localhost:3000/api/cars/sortby/trq`

    <main className={`content_wrapper`}>
      <label htmlFor="order">Order: </label>
      <select id="order" onChange={handleOrderChange} defaultValue={order}>
        <option value="asc">&darr;</option>
        <option value="desc">&uarr;</option>
      </select>
      <label htmlFor="sort-by">Sort By: </label>
      <select id="sort-by" onChange={handleSortChange} defaultValue={sortBy}>
        <option value="id">ID</option>
        <option value="release-year">Release Year</option>
        <option value="horse-power">Horse Power</option>
        <option value="torque">Torque</option>
        {/* <option value="rent-price">&uarr; Rent Price</option> */}
      </select>

      <CarCards CarsData={carsData} />
    </main>
  )
}

export type { CarData }
