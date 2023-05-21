import { useRef, useEffect, useState, ChangeEvent } from 'react'
import css from './.module.scss'
import axios from 'axios'

interface Props {
  onClose: (success: boolean) => void
  id?: number
}

interface AppointmentData {
  id_appointment?: number
  id_mobil: number
  user_name: string
  user_email: string
  user_phone: string
  pickup_date: string
  return_date: string
  is_done?: boolean
}

interface DefaultValue {
  appointment: AppointmentData
}

export default function AddAndEditCar(props: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  const [defaultValue, setDefaultValue] = useState<DefaultValue>({
    appointment: {
      id_mobil: 0,
      user_name: '',
      user_email: '',
      user_phone: '',
      pickup_date: '',
      return_date: '',
    },
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [appointmentData] = await Promise.all([
          axios
            .get(`http://localhost:3000/admin/appointment/${props.id}`)
            .then((response) => response.data.data),
        ])

        setDefaultValue({
          appointment: appointmentData,
        })
      } catch (error) {
        console.error('Error:', error)
      }
    }
    if (props.id) {
      fetchData()
    }
  }, [])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (event.target === containerRef.current) {
        close()
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const close = (success = false) => {
    props.onClose(success)
  }

  // === Handle car data. ===
  const [formAppointmentData, setFormAppointmentData] =
    useState<AppointmentData>(defaultValue.appointment)
  const handleAppointmentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormAppointmentData((prevAppointment) => ({
      ...prevAppointment,
      [name]: value,
    }))
  }

  // === Handle all data. ===
  const [buttonText, setButtonText] = useState('Submit')
  const fstn = (v: any) => {
    return parseInt(String(v))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setButtonText('Submitting data...')
    const formattedForm = {
      appointment: {
        id_mobil: formAppointmentData.id_mobil,
        user_name: formAppointmentData.user_name,
        user_email: formAppointmentData.user_email,
        user_phone: formAppointmentData.user_phone,
        pickup_date: formAppointmentData.pickup_date,
        return_date: formAppointmentData.return_date,
      },
    }
    axios
      .request({
        method: props.id ? 'PUT' : 'POST',
        url: `http://localhost:3000/admin/appointment/${props.id || ''}`,
        data: formattedForm,
      })
      .then((response) => {
        setTimeout(() => {
          setButtonText('✓ Data submitted!')
        }, 750)
        setTimeout(() => {
          close(true)
        }, 250)
      })
      .catch((error) => {
        // console.error(error);
        setTimeout(() => {
          setButtonText('✖ Failed submitting data.')
        }, 750)
      })
  }

  // === Handle changing default data ===
  useEffect(() => {
    setFormAppointmentData(defaultValue.appointment)
  }, [defaultValue])

  return (
    <div className={css.container} ref={containerRef}>
      <div className={css.modal}>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>{props.id ? 'Edit Existing' : 'Add a new'} appointment</h2>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault()
                close()
              }}
            >
              ✖
            </a>
          </div>

          <div className={css.input_container}>
            <h3>Appointment Data</h3>
            <label>Id Mobil </label>
            <input
              type="number"
              name="id_mobil"
              placeholder="e.g. 1"
              value={formAppointmentData.id_mobil || ''}
              onChange={handleAppointmentChange}
            />
            <label>Name </label>
            <input
              type="text"
              name="user_name"
              placeholder={`e.g. ${
                ['Jojon', 'Ida', 'Iko', 'MasGun', 'Ridho'][
                  Math.floor(Math.random() * 5)
                ]
              }`}
              value={formAppointmentData.user_name || ''}
              onChange={handleAppointmentChange}
            />
            <label>Email </label>
            <input
              type="email"
              name="user_email"
              placeholder="e.g. mwww@duck.com"
              value={formAppointmentData.user_email || ''}
              onChange={handleAppointmentChange}
            />
            <label>Phone </label>
            <input
              type="phone"
              name="user_phone"
              placeholder="e.g. 0888696969"
              value={formAppointmentData.user_phone || ''}
              onChange={handleAppointmentChange}
            />
            <label>Pickup Date </label>
            <input
              type="date"
              name="pickup_date"
              placeholder="e.g. 0888696969"
              value={formAppointmentData.pickup_date || ''}
              onChange={handleAppointmentChange}
            />
            <label>Return Date </label>
            <input
              type="date"
              name="return_date"
              placeholder="e.g. 0888696969"
              value={formAppointmentData.return_date || ''}
              onChange={handleAppointmentChange}
            />
          </div>
          <br />
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}
