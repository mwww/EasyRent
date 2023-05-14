import React,{useState, useEffect} from 'react'
import css from './tabel.module.scss'
import axios from 'axios';
function Tabel() {

  const [dataCars, setDataCars] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/cars');
        setDataCars(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(dataCars)

  return (
    <div className={css.table_content}>
        <table className={css.tableI}>
        <thead >
            <tr>
                <th>id_mobil</th>
                <th>popularity</th>
                <th>model</th>
                <th>brand</th>
                <th>release_year</th>
                <th>price</th>
                <th>engine</th>
                <th>HP</th>
                <th>TRQ</th>
            </tr>
        </thead>
        <tbody>
            {
              dataCars.map((cars, index) => {
                  const {id_mobil, popularity_idx,model,brand,release_year,price,engine, HP, TRQ } = cars
                  return (
                        <tr key={index}>
                            <td>{id_mobil}</td>
                            <td>{popularity_idx}</td>
                            <td>{model}</td>
                            <td>{brand}</td>
                            <td>{release_year}</td>
                            <td>{price}</td>
                            <td>{engine}</td>
                            <td>{HP}</td>
                            <td>{TRQ}</td>
                        </tr>
                    ) 
                })
            }
        </tbody>
        </table>
        </div>
  )
}

export default Tabel