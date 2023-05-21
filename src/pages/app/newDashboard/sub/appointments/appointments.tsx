import React, { useEffect, useState } from 'react'

import css from './appointments.module.scss'

import DeleteOrMadAppointment from './modals/deleteAppointments/deleteOrMadAppointment'
import AddAndEditAppointment from './modals/addAndEditAppointments/addAndEditAppointment'

interface AppointmentData {
  id_appointment: number
  id_mobil: number
  user_name: string
  user_email: string
  user_phone: string
  pickup_date: string
  return_date: string
  is_done: boolean
}

export default function Appointment() {
  const [appointmentData, setAppointmentData] = useState<AppointmentData[]>([])

  const [tableData, setTableData] = useState<AppointmentData[]>([])
  const [sorting, setSorting] = useState<{
    column: string
    direction: 'asc' | 'desc'
  }>({ column: '', direction: 'asc' })
  const [searchQuery, setSearchQuery] = useState('')
  const [modal, setModal] = useState<React.ReactNode>(null)
  const [reloadButtonValue, setReloadButtonValue] = useState<string>('Reload')

  useEffect(() => {
    document.title = 'Appointment - EasyRent'
    fetchAndSetData()
  }, [])

  useEffect(() => {
    setTableData(appointmentData)
  }, [appointmentData])

  const fetchAndSetData = () => {
    setReloadButtonValue('🔄Reloading...')
    fetch(`http://localhost:3000/admin/appointment/`)
      .then(async (response) => {
        const { data } = await response.json()
        setAppointmentData(data)
        setTimeout(() => {
          setReloadButtonValue('🔄Reload')
        }, 1000)
      })
      .catch((error) => {
        setReloadButtonValue('✖Failed Reloading')
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

  const deleteAppointment = (id: number) => {
    const confirmationModalComponent = (
      <DeleteOrMadAppointment id={id} action="del" onClose={modalClose} />
    )
    setModal(confirmationModalComponent)
  }
  const madAppointment = (id: number) => {
    const confirmationModalComponent = (
      <DeleteOrMadAppointment id={id} action="mad" onClose={modalClose} />
    )
    setModal(confirmationModalComponent)
  }

  const newCar = () => {
    const newCarModalComponent = <AddAndEditAppointment onClose={modalClose} />
    setModal(newCarModalComponent)
  }
  const editCar = (id: number) => {
    const newCarModalComponent = (
      <AddAndEditAppointment onClose={modalClose} id={id} />
    )
    setModal(newCarModalComponent)
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
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault()
                  newCar()
                }}
              >
                ➕add
              </a>{' '}
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault()
                  fetchAndSetData()
                }}
              >
                {reloadButtonValue}
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
                  <th onClick={() => handleSort('id_mobil')}>Car ID</th>
                  <th onClick={() => handleSort('user_name')}>Name</th>
                  <th onClick={() => handleSort('user_email')}>Email</th>
                  <th onClick={() => handleSort('user_phone')}>Phone</th>
                  <th onClick={() => handleSort('pickup_date')}>Pickup</th>
                  <th onClick={() => handleSort('return_date')}>Return</th>
                  <th onClick={() => handleSort('is_done')}>Done</th>
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
                    <td>{row.is_done ? '✓' : '✖'}</td>
                    <td>
                      <div className={css.actions}>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault()
                            madAppointment(row.id_appointment)
                          }}
                        >
                          ✔️Mark as done
                        </a>{' '}
                        &nbsp;
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault()
                            editCar(row.id_appointment)
                          }}
                        >
                          ✏️edit
                        </a>{' '}
                        &nbsp;
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault()
                            deleteAppointment(row.id_appointment)
                          }}
                        >
                          ❌del
                        </a>{' '}
                      </div>
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
