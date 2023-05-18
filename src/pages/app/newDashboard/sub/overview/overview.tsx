import { useEffect } from 'react'

import css from './overview.module.scss'

export default function Overview() {
  useEffect(() => {
    document.title = 'Overview - EasyRent'
  }, [])
  return (
    <>
      howdyy!
      <br />
      hi!
    </>
  )
}
