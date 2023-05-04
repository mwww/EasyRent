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
  const [order, setOrder] = useState<string>('+')
  const [sortBy, setSortBy] = useState<string>('id')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/cars/sortby/${order}${sortBy}`
        )
        const data = await response.json()
        // console.log(data)
        // Set the sorted data
        setCarsData(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [sortBy, order]) // run whenever sortBy and order changes

  const handleOrderChange = (e) => {
    setOrder(e.target.value)
  }

  const handleSortChange = (e) => {
    const selectedSortBy = e.target.value
    console.log(selectedSortBy)
    setSortBy(selectedSortBy)
  }

  return (
    // TODO: replace value with backend's end points.
    // e.g. value="trq"(torque) url: `http://localhost:3000/api/cars/sortby/trq`

    <main className={`content_wrapper`}>
      <label htmlFor="order">Order: </label>
      <select id="order" onChange={handleOrderChange} defaultValue="+">
        <option value="+">&darr;</option>
        <option value="-">&uarr;</option>
      </select>
      <label htmlFor="sort-by">Sort By: </label>
      <select id="sort-by" onChange={handleSortChange} defaultValue="id">
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
