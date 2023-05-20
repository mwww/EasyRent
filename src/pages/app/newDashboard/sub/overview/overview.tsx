import { useEffect } from 'react'

import css from './.module.scss'

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

// import React, { useState, ChangeEvent, FormEvent } from 'react'

// interface CarFormProps {
//   onSubmit: (car: Car) => void
// }

// interface Car {
//   popularity_idx: number
//   model: string
//   brand: string
//   release_year: number
//   price: number
//   engine: string
//   HP: number
//   TRQ: number
// }

// export default function Overview() {
//   const [car, setCar] = useState<Car>({
//     popularity_idx: 0,
//     model: '',
//     brand: '',
//     release_year: 0,
//     price: 0,
//     engine: '',
//     HP: 0,
//     TRQ: 0,
//   })

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target
//     setCar((prevCar) => ({
//       ...prevCar,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault()
//     // onSubmit(car)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Popularity Index:
//         <input
//           type="number"
//           name="popularity_idx"
//           value={car.popularity_idx}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Model:
//         <input
//           type="text"
//           name="model"
//           value={car.model}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Brand:
//         <input
//           type="text"
//           name="brand"
//           value={car.brand}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Release Year:
//         <input
//           type="number"
//           name="release_year"
//           value={car.release_year}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Price:
//         <input
//           type="number"
//           name="price"
//           value={car.price}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Engine:
//         <input
//           type="text"
//           name="engine"
//           value={car.engine}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Horsepower (HP):
//         <input type="number" name="HP" value={car.HP} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Torque (TRQ):
//         <input
//           type="number"
//           name="TRQ"
//           value={car.TRQ}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   )
// }
