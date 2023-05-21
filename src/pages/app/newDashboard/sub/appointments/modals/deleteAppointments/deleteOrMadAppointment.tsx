import { useRef, useEffect } from 'react'
import css from './.module.scss'

interface Props {
  id: number
  action: string // del, mad
  onClose: (success: boolean) => void
}

export default function DeleteOrMadAppointment(props: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

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

  const madAppointment = () => {
    fetch(`http://localhost:3000/admin/appointment/${props.id}`, {
      method: 'GET',
    })
      .then(async (response: any) => {
        const { data } = await response.json()
        data.is_done = true
        const body = {
          appointment: data,
        }
        console.log(data.is_done)
        fetch(`http://localhost:3000/admin/appointment/${props.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })
          .then((response) => {
            if (response.ok) {
              console.log('Appointment successfully marked as done')
              close(true)
            } else {
              console.error('Failed to mark appointment as done')
            }
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const deleteAppointment = () => {
    fetch(`http://localhost:3000/admin/appointment/${props.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Appointment deleted successfully')
          close(true)
        } else {
          console.error('Failed to delete appointment')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <div className={css.container} ref={containerRef}>
      <div className={css.modal}>
        <div>
          <p>Are you sure?</p>
          <p>
            Are you sure you want to delete appointment with ID {props.id}?{' '}
            <br />
            This action is <span className={css.danger}>not undo-able!</span>
          </p>
        </div>
        <div>
          <button onClick={() => close()}>cancel</button>
          {props.action === 'del' ? (
            <button className={css.danger} onClick={() => deleteAppointment()}>
              Delete
            </button>
          ) : (
            <button className={css.danger} onClick={() => madAppointment()}>
              Mark As Done
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
