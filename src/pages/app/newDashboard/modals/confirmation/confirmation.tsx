import { useRef, useEffect } from 'react'
import css from './confirmation.module.scss'

interface Props {
  Q: string
  Msg?: string
  Url: string
  ReqMtd: string
  ConfirmLabel?: string
  CancelLabel?: string
  IsDanger?: boolean
  IsNeutral?: boolean
  OnCancel: () => void
}

export default function Confirmation(props: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const cancel = () => {
    props.OnCancel()
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // console.log(containerRef.current && modalRef.current ? true : false)
      // console.log(event.target === containerRef.current)

      if (event.target === containerRef.current) {
        cancel()
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [props.OnCancel])

  return (
    <div className={css.container} ref={containerRef}>
      <div className={css.modal}>
        <div>
          <p>{props.Q}</p>
          {props.Msg ? <p>{props.Msg}</p> : ''}
        </div>
        <div>
          <button
            onClick={() => {
              cancel()
            }}
          >
            {props.CancelLabel || 'Cancel'}
          </button>
          <button>{props.ConfirmLabel || 'Confirm'}</button>
        </div>
      </div>
    </div>
  )
}
