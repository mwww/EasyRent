import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// External Components
import UniversalHero from '../../components/universalHero/universalHero'
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

// internal Components
import Bg from './bg/bg'
import Main from './main/main'

interface CarData {
  id_mobil: number
  popularity_idx: number
  model: string
  brand: string
  release_year: number
  price: number
  engine: string
  HP: number
  TRQ: number
  transmissions: Transmission[]
  images: string[]
}

interface Transmission {
  transmission_type: string
  speed: number
}

export default function Details() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [carData, setCarData] = useState<CarData>()
  const [e, setE] = useState<boolean>(false)
  const params = useParams()

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        const response = await fetch(
          `http://localhost:3000/api/car/${params.id}`
        )
        const res = (await response.json()).data

        console.log(res)
        if (res) {
          setCarData(res)
          setIsLoading(false)
        } else setE(true)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    document.title =
      (isLoading && carData ? 'Detail' : carData!.model) + ' - EasyRent'
  }, [])

  if (carData && !e) {
    return (
      <>
        <NavBar />
        {/* <UniversalHero
          text={isLoading ? 'loading...' : `${carData.brand} ${carData.model}`}
        /> */}
        {/* <p>{JSON.stringify(carData)}</p> */}
        {/* <Bg imgUrl={isLoading ? '' : carData.images[0]} /> */}
        <Main carData={carData} />
        <Footer />
      </>
    )
  } else if (!carData && e) {
    return (
      <>
        <NavBar />
        <UniversalHero text={`Error`} />
        <Footer />
      </>
    )
  }
}

export type { CarData }
