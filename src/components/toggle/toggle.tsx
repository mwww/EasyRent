import { useState, useEffect } from 'react'
import css from './toggle.module.scss'

interface Props {
  Values: string[]
  OnChange: (active: string) => void
  DefaultValue?: string
  IsImage?: boolean
  Labels?: string[] // Add the Labels prop
}

export default function Toggle(props: Props) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    if (props.Values.length > 0) {
      const defaultValue = props.DefaultValue || props.Values[0]
      if (props.Values.includes(defaultValue)) {
        setActive(defaultValue)
        props.OnChange(defaultValue)
      } else {
        setActive(props.Values[0])
        props.OnChange(props.Values[0])
      }
    }
  }, [props.Values])

  const handleButtonClick = (value: string) => {
    if (value !== active) {
      setActive(value)
      props.OnChange(value)
    }
  }

  return (
    <div className={css.toggle}>
      {props.Values.length > 0
        ? props.Values.map((value, index) => {
            const label =
              props.Labels && index < props.Labels.length
                ? props.Labels[index]
                : value
            return (
              <button
                className={value === active ? css.active : ''}
                onClick={() => handleButtonClick(value)}
                key={index}
              >
                {label}
              </button>
            )
          })
        : 'values prop is empty'}
    </div>
  )
}
