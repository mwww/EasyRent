import React, { useEffect, useState } from 'react'

import css from './cars.module.scss'

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
  const [carsData, setCarsData] = useState<CarData[]>([])
  const [tableData, setTableData] = useState<CarData[]>([])
  const [sorting, setSorting] = useState<{
    column: string
    direction: 'asc' | 'desc'
  }>({ column: '', direction: 'asc' })
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    document.title = 'Overview - EasyRent'
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/admin/cars`)
        const { data } = await response.json()
        setCarsData(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    setTableData(carsData)
  }, [carsData])

  const handleSort = (column: string) => {
    setSorting((prevSorting) => ({
      column,
      direction:
        prevSorting.column === column
          ? prevSorting.direction === 'asc'
            ? 'desc'
            : 'asc'
          : 'asc',
    }))
    setSearchQuery('')
  }

  const filteredData = searchQuery
    ? tableData.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : tableData

  const sortedData = filteredData.sort((a: any, b: any) => {
    const { column, direction } = sorting
    const aValue = a[column]
    const bValue = b[column]

    return direction === 'asc' ? aValue - bValue : bValue - aValue
  })

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <>
      {/* ========== */}
      {/* modal here */}
      {/* ========== */}
      <div className={css.container}>
        <div>
          <div>
            <h3>Cars</h3>
            <p>{sortedData.length} cars found!</p>
          </div>
          <div>
            <p>menu (add car, sorting)</p>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
          </div>
        </div>
        <div className={css.table_container}>
          <table className={css.table}>
            <thead>
              <tr>
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
      </div>
    </>
  )
}
