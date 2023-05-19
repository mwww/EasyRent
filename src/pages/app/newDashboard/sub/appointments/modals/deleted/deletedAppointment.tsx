import { useRef, useEffect } from 'react'
import css from './deleteAppoint.module.scss'

interface Props {
  id: number
  onClose: (success: boolean) => void
}

export default function DeleteCar(props: Props) {
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

  const deleteCar = () => {
    fetch(`http://localhost:3000/admin/appointments/${props.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Car deleted successfully')
          close(true)
        } else {
          console.error('Failed to delete car')
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
            Are you sure you want to delete the car with ID {props.id}? <br />
            This action is <span className={css.danger}>not undo-able!</span>
          </p>
        </div>
        <div>
          <button onClick={() => close()}>cancel</button>
          <button className={css.danger} onClick={() => deleteCar()}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
