import { useRef, useEffect, useState, ChangeEvent } from 'react'
import css from './.module.scss'
import axios from 'axios'

interface Props {
  onClose: (success: boolean) => void
  id?: number
}

interface Car {
  popularity_idx?: number
  model?: string
  brand?: string
  release_year?: number
  price?: number
  engine?: string
  HP?: number
  TRQ?: number
}
interface Transmission {
  transmission_type?: string
  speed?: number
}
interface Image {
  img_name?: string
  img_ext?: string
}

interface DefaultValue {
  car: Car
  transmissions: Transmission[]
  images: Image[]
}

export default function AddAndEditCar(props: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  const [defaultValue, setDefaultValue] = useState<DefaultValue>({
    car: {
      popularity_idx: 0,
      model: '',
      brand: '',
      release_year: 1900,
      price: 0,
      engine: '',
      HP: 0,
      TRQ: 0,
    },
    transmissions: [
      {
        transmission_type: 'AT',
        speed: 0,
      },
    ],
    images: [
      {
        img_name: '',
        img_ext: '',
      },
    ],
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [carData, transmissionData, imageData] = await Promise.all([
          axios
            .get(`http://localhost:3000/admin/car/${props.id}`)
            .then((response) => response.data.data),
          axios
            .get(`http://localhost:3000/admin/transmission/${props.id}`)
            .then((response) => response.data.data),
          axios
            .get(`http://localhost:3000/admin/image/${props.id}`)
            .then((response) => response.data.data),
        ])

        setDefaultValue({
          car: carData,
          transmissions: transmissionData,
          images: imageData,
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
  const [formCarData, setFormCarData] = useState<Car>(defaultValue.car)
  const handleCarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    // console.log(value)
    setFormCarData((prevCar) => ({
      ...prevCar,
      [name]: value,
    }))
  }

  // === Handle transmissions data. ===
  const [formTransmissionsData, setFormTransmissionsData] = useState<
    Transmission[]
  >(defaultValue.transmissions)
  const handleTransmissionsChange = (index: number, name: any, value: any) => {
    setFormTransmissionsData((prevTransmissions) => {
      const updatedTransmissions = [...prevTransmissions]
      const selectedData = updatedTransmissions[index]
      if (name === 'transmission_type') {
        selectedData.transmission_type = value
      } else if (name === 'speed') {
        selectedData.speed = value
      }
      return updatedTransmissions
    })
  }
  const handleTransmissionRemove = (index: number) => {
    setFormTransmissionsData((prevTransmissions) => {
      const updatedTransmissions = [...prevTransmissions]
      updatedTransmissions.splice(index, 1)
      return updatedTransmissions
    })
  }
  const handleTransmissionAdd = () => {
    setFormTransmissionsData((prevTransmissions) => {
      const newTransmission = {
        transmission_type: 'AT',
        speed: 0,
      }
      const updatedTransmissions = [...prevTransmissions, newTransmission]
      return updatedTransmissions
    })
  }

  // === Handle images data. ===
  const [formImagesData, setFormImagesData] = useState<Image[]>(
    defaultValue.images
  )
  const handleImagesChange = (index: number, name: any, value: any) => {
    setFormImagesData((prevImages) => {
      const updatedImages = [...prevImages]
      const selectedData = updatedImages[index]
      if (name === 'img_name') {
        selectedData.img_name = value
      } else if (name === 'img_ext') {
        selectedData.img_ext = value
      }
      return updatedImages
    })
  }
  const handleImageRemove = (index: number) => {
    setFormImagesData((prevImages) => {
      const updatedImages = [...prevImages]
      updatedImages.splice(index, 1)
      return updatedImages
    })
  }
  const handleImageAdd = () => {
    setFormImagesData((prevImages) => {
      const newImage = {
        img_name: '',
        img_ext: '',
      }
      const updatedImages = [...prevImages, newImage]
      return updatedImages
    })
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
      car: {
        popularity_idx: fstn(formCarData.popularity_idx),
        model: formCarData.model,
        brand: formCarData.brand,
        release_year: fstn(formCarData.release_year),
        price: fstn(formCarData.price),
        engine: formCarData.engine,
        HP: fstn(formCarData.HP),
        TRQ: fstn(formCarData.TRQ),
      },
      transmissions: [...formTransmissionsData].map((t) => {
        let pT = {
          transmission_type: t.transmission_type,
          speed: fstn(t.speed),
        }
        return pT
      }),
      images: [...formImagesData],
    }
    // axios
    //   .post('http://localhost:3000/admin/car/', formattedForm)
    //   .then((response) => {
    //       setTimeout(() => {
    //         setButtonText('✓ Data submitted!')
    //       }, 750)
    //       setTimeout(() => {
    //         close(true)
    //       }, 250)
    //   })
    //   .catch((error) => {
    //     // console.error(error)
    //     setTimeout(() => {
    //       setButtonText('✖ Failed submitting data.')
    //     }, 750)
    //   })
    axios
      .request({
        method: props.id ? 'PUT' : 'POST',
        url: `http://localhost:3000/admin/car/${props.id || ''}`,
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
    setFormCarData(defaultValue.car)
    setFormTransmissionsData(defaultValue.transmissions)
    setFormImagesData(defaultValue.images)
  }, [defaultValue])

  return (
    <div className={css.container} ref={containerRef}>
      <div className={css.modal}>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Add a new car</h2>
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
            <h3>Car Data</h3>
            <label>Popularity </label>
            <input
              type="number"
              name="popularity_idx"
              placeholder="0 - 10"
              value={formCarData.popularity_idx || ''}
              onChange={handleCarChange}
              min={0}
              max={10}
            />
            <label>Model </label>
            <input
              type="text"
              name="model"
              placeholder="e.g. Aventador"
              value={formCarData.model}
              onChange={handleCarChange}
            />
            <label>Brand </label>
            <input
              type="text"
              name="brand"
              placeholder="e.g. Lamborghini"
              value={formCarData.brand}
              onChange={handleCarChange}
            />
            <label>Released </label>
            <input
              type="number"
              name="release_year"
              placeholder={`e.g. 1900 - ${new Date().getFullYear()}`}
              value={
                formCarData.release_year !== 1900
                  ? formCarData.release_year
                  : ''
              }
              onChange={handleCarChange}
              min={1900}
              max={new Date().getFullYear()}
            />
            <label>Price </label>
            <input
              type="number"
              name="price"
              placeholder="e.g. Rp. 6.969.696"
              value={formCarData.price || ''}
              onChange={handleCarChange}
            />
            <label>Engine </label>
            <input
              type="text"
              name="engine"
              placeholder="e.g. Naturally Aspirated 6.5-Liter V-12"
              value={formCarData.engine}
              onChange={handleCarChange}
            />
            <label>HP </label>
            <input
              type="number"
              name="HP"
              placeholder="e.g. 769 HP"
              value={formCarData.HP || ''}
              onChange={handleCarChange}
            />
            <label>TRQ </label>
            <input
              type="number"
              name="TRQ"
              placeholder="e.g. 531 TRQ"
              value={formCarData.TRQ || ''}
              onChange={handleCarChange}
            />
            <h3>Transmission Data</h3>
            {formTransmissionsData.length > 0
              ? formTransmissionsData.map((t, index) => (
                  <>
                    <label>Transmission {index + 1}</label>
                    <div className={css.multi_comp}>
                      <select
                        onChange={(e) => {
                          handleTransmissionsChange(
                            index,
                            'transmission_type',
                            e.target.value
                          )
                        }}
                        defaultValue={t.transmission_type}
                      >
                        <option value="AT">AT</option>
                        <option value="MT">MT</option>
                      </select>
                      <input
                        type="number"
                        name="speed"
                        placeholder="I am Speed..."
                        value={t.speed || ''}
                        onChange={(e) => {
                          handleTransmissionsChange(
                            index,
                            e.target.name,
                            e.target.value
                          )
                        }}
                      />
                      {formTransmissionsData.length !== 1 ? (
                        <button
                          className="reg"
                          onClick={() => handleTransmissionRemove(index)}
                        >
                          &#10006;
                        </button>
                      ) : (
                        ''
                      )}
                    </div>
                  </>
                ))
              : ''}
            <label></label>
            <button
              type="button"
              className="reg"
              onClick={() => handleTransmissionAdd()}
            >
              +
            </button>
            <h3>Image Data</h3>
            {formImagesData.length > 0
              ? formImagesData.map((imgs, index) => (
                  <>
                    <label>Image {index + 1}</label>
                    <div className={css.multi_comp}>
                      <input
                        type="text"
                        name="img_name"
                        placeholder="Image Name/ID"
                        value={imgs.img_name}
                        onChange={(e) => {
                          handleImagesChange(
                            index,
                            e.target.name,
                            e.target.value
                          )
                        }}
                      />
                      <input
                        type="text"
                        name="img_ext"
                        placeholder=".jpg/.png/.webp"
                        value={imgs.img_ext}
                        onChange={(e) => {
                          handleImagesChange(
                            index,
                            e.target.name,
                            e.target.value
                          )
                        }}
                      />
                      {formImagesData.length !== 1 ? (
                        <button
                          className="reg"
                          onClick={() => handleImageRemove(index)}
                        >
                          &#10006;
                        </button>
                      ) : (
                        ''
                      )}
                    </div>
                  </>
                ))
              : ''}
            <label></label>
            <button
              type="button"
              className="reg"
              onClick={() => handleImageAdd()}
            >
              +
            </button>
          </div>
          <br />
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}
