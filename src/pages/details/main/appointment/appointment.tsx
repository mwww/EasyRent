import { ChangeEvent, useEffect, useState } from 'react'
import css from './appointment.module.scss'
import axios from 'axios'

interface Props {
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

export default function Appointment(props: Props) {
  //   const handleSubmit = () => {}
  //   const handleAppointmentChange = () => {}
  //   const buttonText = 'uh'
  //   const formAppointmentData = {
  //     id_mobil: 0,
  //     user_name: '',
  //     user_email: '',
  //     user_phone: '',
  //     pickup_date: '',
  //     return_date: '',
  //   }
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

    fetchData()
  }, [])

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
  const [buttonText, setButtonText] = useState('Rent Now!')
  const fstn = (v: any) => {
    return parseInt(String(v))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setButtonText('Submitting data...')
    const formattedForm = {
      appointment: {
        id_mobil: props.id,
        user_name: formAppointmentData.user_name,
        user_email: formAppointmentData.user_email,
        user_phone: formAppointmentData.user_phone,
        pickup_date: formAppointmentData.pickup_date,
        return_date: formAppointmentData.return_date,
      },
    }
    axios
      .request({
        method: 'POST',
        url: `http://localhost:3000/admin/appointment/`,
        data: formattedForm,
      })
      .then((response) => {
        setTimeout(() => {
          setButtonText('✓ Data submitted!')
        }, 750)
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
    <section className={css.appointment_section}>
      <div>
        <h2>Are you ready to rent this car?</h2>
        <p>Please fill in the form if you are!</p>
      </div>
      <div className={css.container}>
        <form onSubmit={handleSubmit}>
          <div className={css.input_container}>
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
              required
            />
            <label>Email </label>
            <input
              type="email"
              name="user_email"
              placeholder="e.g. mwww@duck.com"
              value={formAppointmentData.user_email || ''}
              onChange={handleAppointmentChange}
              required
            />
            <label>Phone </label>
            <input
              type="phone"
              name="user_phone"
              placeholder="e.g. 0888696969"
              value={formAppointmentData.user_phone || ''}
              onChange={handleAppointmentChange}
              required
            />
            <label>Pickup Date </label>
            <input
              type="date"
              name="pickup_date"
              placeholder="e.g. 0888696969"
              value={formAppointmentData.pickup_date || ''}
              onChange={handleAppointmentChange}
              required
            />
            <label>Return Date </label>
            <input
              type="date"
              name="return_date"
              placeholder="e.g. 0888696969"
              value={formAppointmentData.return_date || ''}
              onChange={handleAppointmentChange}
              required
            />
            <div></div>
            <button type="submit">{buttonText}</button>
          </div>
        </form>
      </div>
    </section>
  )
}
