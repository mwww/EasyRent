import { useEffect, useState } from 'react'

import css from './cars.module.scss'
import './cars.module.scss'

interface CarData {
  id_mobil: number
  popularity_idx: number
  model: string
  brand: string
  release_year: number
  price: number
  engine: string
  HP: number
  TRQ: number
}

export default function Cars() {
  useEffect(() => {
    document.title = 'Overview - EasyRent'
  }, [])

  const [carsData, setCarsData] = useState<CarData[]>([])
  const [tableData, setTableData] = useState<CarData[]>([])
  const [sorting, setSorting] = useState({ column: '', direction: 'asc' })

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/admin/cars`)
        const data = (await response.json()).data
        // Set the sorted data
        setCarsData(data)
        console.log('carsData', carsData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [sorting])

  useEffect(() => {
    setTableData(carsData)
  }, [carsData])

  const handleSort = (column: any) => {
    if (sorting.column === column) {
      setSorting({
        ...sorting,
        direction: sorting.direction === 'asc' ? 'desc' : 'asc',
      })
    } else {
      setSorting({ column, direction: 'asc' })
    }
  }
  const sortedData = tableData.sort((a: any, b: any) => {
    const { column, direction } = sorting
    const aValue = a[column]
    const bValue = b[column]

    if (direction === 'asc') {
      return aValue > bValue ? 1 : -1
    } else {
      return aValue < bValue ? 1 : -1
    }
  })

  return (
    <>
      {/* modal here */}
      {/* end modal */}
      <div className={css.container}>
        <table className={css.table}>
          <thead>
            <tr>
              {/* <th onClick={() => handleSort('name')}>Name</th>
              <th onClick={() => handleSort('age')}>Age</th>
              <th onClick={() => handleSort('country')}>Country</th> */}
              <th onClick={() => handleSort('id_mobil')}>ID</th>
              <th onClick={() => handleSort('popularity_idx')}>
                Popularity Index
              </th>
              <th onClick={() => handleSort('model')}>Model</th>
              <th onClick={() => handleSort('brand')}>Brand</th>
              <th onClick={() => handleSort('release_year')}>Release Year</th>
              <th onClick={() => handleSort('price')}>Price</th>
              <th onClick={() => handleSort('engine')}>Engine</th>
              <th onClick={() => handleSort('HP')}>HP</th>
              <th onClick={() => handleSort('TRQ')}>TRQ</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <tr key={index}>
                <td>{row.id_mobil}</td>
                <td>{row.popularity_idx}</td>
                <td>{row.model}</td>
                <td>{row.brand}</td>
                <td>{row.release_year}</td>
                <td>{row.price}</td>
                <td>{row.engine}</td>
                <td>{row.HP}</td>
                <td>{row.TRQ}</td>
                <td>del, edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )

  // return (
  // <>
  // <nav>
  //   nav goes here.
  // </nav>
  // </>
  // )
}
