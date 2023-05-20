import React, { useEffect, useState } from 'react'

import css from './appointments.module.scss'

import Confirmation from './modals/deleteAppointment/deletedAppointment'

interface AppointmentData {
  id_appointment: number
  id_mobil: number
  user_name: string
  user_email: string
  user_phone: string
  pickup_date: string
  return_date: string
}

const dummyData: AppointmentData[] = [
  {
    id_appointment: 1,
    id_mobil: 2,
    user_name: 'Abdul',
    user_email: 'Abdul@gmail.com',
    user_phone: '0812373427',
    pickup_date: '20-03-2023 ',
    return_date: '20-04-2023 ',
  },
  {
    id_appointment: 2,
    id_mobil: 4,
    user_name: 'Mamat',
    user_email: 'mamatkece@gmail.com',
    user_phone: '0812373427',
    pickup_date: '20-10-2023 ',
    return_date: '20-11-2023 ',
  },
  {
    id_appointment: 3,
    id_mobil: 6,
    user_name: 'Rizki',
    user_email: 'Rizki@gmail.com',
    user_phone: '0812373427',
    pickup_date: '20-01-2023 ',
    return_date: '20-02-2023 ',
  },
]

export default function Cars() {
  const [carsData, setCarsData] = useState<AppointmentData[]>([])
  const [tableData, setTableData] = useState<AppointmentData[]>([])
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
    fetch(`http://localhost:3000/admin/appointment`)
      .then(async (response) => {
        const { data } = await response.json()
        setCarsData(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    // setCarsData(dummyData)
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
            <h3>Appointments</h3>
            <p>{sortedData.length} appointments found!</p>
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
                  <th onClick={() => handleSort('id_appointment')}>ID</th>
                  <th onClick={() => handleSort('id_mobil')}>Id_mobil</th>
                  <th onClick={() => handleSort('user_name')}>username</th>
                  <th onClick={() => handleSort('user_email')}>email</th>
                  <th onClick={() => handleSort('user_phone')}>phone</th>
                  <th onClick={() => handleSort('pickup_date')}>pickup_date</th>
                  <th onClick={() => handleSort('return_date')}>return_date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.id_appointment}</td>
                    <td>{row.id_mobil}</td>
                    <td>{row.user_name}</td>
                    <td>{row.user_email}</td>
                    <td>{row.user_phone}</td>
                    <td>{row.pickup_date}</td>
                    <td>{row.return_date}</td>
                    <td>
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault()
                          deleteCar(row.id_appointment)
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
