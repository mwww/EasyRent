import { useState,useEffect, ReactNode } from 'react'
import css from './appointments.module.scss'

interface appointmentData {
  id_appointment: number
  id_mobil:number
  user_name:string
  user_email:string
  user_phone:string
  pickup_date:ReactNode
  return_date:ReactNode
}


export default function Overview() {
  useEffect(() => {
    document.title = 'Appointments - EasyRent'
  }, [])

    const [appointtData, setAppointData] = useState<appointmentData[]>([])
    const [dataTable,setDataTable] = useState<appointmentData[]>([])
    const [sorting, setSorting] = useState<{
      column: string
      direction: 'asc' | 'desc'
    }>({ column: '', direction: 'asc' })
    const [searchQuery,setSearchQuery] = useState('') 

    useEffect(() => {
      async function fetchData() {
          try{
            const response = await fetch('http://localhost:3000/admin/appointments')
            const {data} = await response.json()
            setAppointData(data)
          }
          catch(error){
            console.log("error")
          }
      }

      fetchData()
    },[])

    useEffect(() => {
      setDataTable(appointtData)
    },[appointtData])

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

    const filterData = searchQuery
    ? dataTable.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : dataTable
    
    const sortData = filterData.sort((a: any, b: any) => {
      const { column, direction} = sorting
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
          <h3>Appointments</h3>
          <p > {sortData.length} Appointments found!</p>
        </div>
        <div>
          <p>menu (add Appointments, sorting)</p>
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
              <th onClick={() => handleSort("id_appointment")}>ID</th>
              <th >Id_Mobil</th>
              <th >Username</th>
              <th >Email</th>
              <th >Phone</th>
              <th >Pick-Up Date</th>
              <th >Return Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
              sortData.map((row,index) => {
                const {id_appointment, id_mobil, user_name,user_email,user_phone, pickup_date, return_date } = row
               return (
                <tr key={index}>
                  <td>{id_appointment}</td>
                  <td>{id_mobil}</td>
                  <td>{user_name}</td>
                  <td>{user_email}</td>
                  <td>{user_phone}</td>
                  <td>{pickup_date}</td>
                  <td>{return_date}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>

                </tr>
               ) 
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  </>
  )
}
