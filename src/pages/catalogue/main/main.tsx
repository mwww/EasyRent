import { useEffect, useState } from 'react'
import CarCards from './carCards/carCards'

import css from './main.module.scss'

import Toggle from '../../../components/toggle/toggle'

interface InnerCarData {
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
interface CarData {
  EasyRentData: EasyRentData
  CarData: InnerCarData
}

export default function Main() {
  const [carsData, setCarsData] = useState<CarData[]>([])
  const [order, setOrder] = useState<string>('asc')
  const [sortBy, setSortBy] = useState<string>('id')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [cardStyle, setCardStyle] = useState<string>('row')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/cars?sortby=${sortBy}&order=${order}`
        )
        const data = (await response.json()).data
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
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [sortBy, order])

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortBy = event.target.value
    setSortBy(selectedSortBy)
  }

  const filteredCarsData = carsData.filter((carData) => {
    const { Brand, Model, ReleaseYear, Engine, Power } = carData.CarData
    const searchTerm = searchQuery.toLowerCase()

    const includesSearchTerm = (str: string) =>
      str.toLowerCase().includes(searchTerm)
    const hasSearchTerm = (obj: object) =>
      Object.values(obj).some((value) =>
        typeof value === 'string' ? includesSearchTerm(value) : false
      )

    return (
      includesSearchTerm(Brand) ||
      includesSearchTerm(Model) ||
      String(ReleaseYear).includes(searchTerm) ||
      includesSearchTerm(Engine) ||
      hasSearchTerm(Power) ||
      includesSearchTerm(String(Power.HP)) ||
      includesSearchTerm(String(Power.TQ))
    )
  })

  return (
    <main className={`content_wrapper`}>
      <div className={css.options}>
        <div>
          <label htmlFor="sort-by">Sort:</label>
          <Toggle
            Labels={['↓', '↑']}
            Values={['asc', 'desc']}
            OnChange={setOrder}
            DefaultValue={order}
          />
          <select
            id="sort-by"
            onChange={handleSortChange}
            defaultValue={sortBy}
          >
            <option value="id">ID</option>
            <option value="popularity">popularity</option>
            <option value="release">Release Year</option>
            <option value="price">price</option>
            <option value="hp">Horse Power</option>
            <option value="trq">Torque</option>
          </select>
        </div>
        <div>
          {searchQuery ? (
            <p>
              {filteredCarsData.length
                ? `${filteredCarsData.length} Cars Found!`
                : 'No Car Found!'}
            </p>
          ) : (
            ''
          )}

          <input
            id="search"
            type="text"
            value={searchQuery}
            placeholder="Search..."
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <Toggle
            Labels={['Row', 'Grid']}
            Values={['row', 'grid']}
            OnChange={setCardStyle}
            DefaultValue={cardStyle}
          />
        </div>
      </div>

      <CarCards CarsData={filteredCarsData} CardStyle={cardStyle} />
    </main>
  )
}

export type { CarData }
