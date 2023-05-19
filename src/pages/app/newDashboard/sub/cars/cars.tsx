import React, { useEffect, useState } from 'react'

import css from './cars.module.scss'

import Confirmation from './modals/deleteCar/deleteCar'

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
  const [modal, setModal] = useState<React.ReactNode>(null)

  useEffect(() => {
    document.title = 'Cars - EasyRent'
  }, [])

  useEffect(() => {
    fetchAndSetData()
  }, [])

  useEffect(() => {
    setTableData(carsData)
  }, [carsData])

  const fetchAndSetData = () => {
    fetch(`http://localhost:3000/admin/cars`)
      .then(async (response) => {
        const { data } = await response.json()
        setCarsData(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
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

  const deleteCar = (id: number) => {
    const confirmationComponent = <Confirmation id={id} onClose={modalClose} />
    setModal(confirmationComponent)
  }

  const modalClose = (isDeleted: boolean) => {
    setModal(null)
    if (isDeleted) {
      fetchAndSetData()
    }
  }

  return (
    <>
      {/* ========== */}
      {/* modal here */}
      {modal}
      {/* ========== */}
      <div className={css.container}>
        <div>
          <div>
            <h3>Cars</h3>
            <p>{sortedData.length} cars found!</p>
          </div>
          <div>
            <p>
              menu (add car, sorting)
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault()
                  fetchAndSetData()
                }}
              >
                Refresh
              </a>
            </p>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
          </div>
        </div>
        <div className={css.table_container}>
          {sortedData.length > 0 ? (
            <table className={css.table}>
              <thead>
                <tr>
                  <th onClick={() => handleSort('id_mobil')}>ID</th>
                  <th onClick={() => handleSort('popularity_idx')}>
                    Popularity Index
                  </th>
                  <th onClick={() => handleSort('model')}>Model</th>
                  <th onClick={() => handleSort('brand')}>Brand</th>
                  <th onClick={() => handleSort('release_year')}>
                    Release Year
                  </th>
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
                    <td>
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault()
                          deleteCar(row.id_mobil)
                        }}
                      >
                        del
                      </a>
                      , edit
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data found!</p>
          )}
        </div>
      </div>
    </>
  )
}
