import SideBar from '../SideBar/sidebar'
import css from './main.module.scss'
import React,{useState,useEffect} from 'react'


function Main() {
    useEffect(() => {
        document.title = 'admin - EasyRent'
      }, [])
  return (
    <div>
        <main className={`${css.bg} background_def`}>
            <div className={css.container}>
               <SideBar/>
                <div className={css.boxtable}>
                  <table className={css.table}>
                    <thead>
                      <tr>
                        <th>Nomor </th>
                        <th>Nama Mahasiswa</th>
                        <th>Nama Mahasiswa</th>
                        <th>Nama Mahasiswa</th>
                        <th>Nama Mahasiswa</th>
                        <th>Nama Mahasiswa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Ayu Daini</td>
                        <td>Sistem Informasi</td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>Islahudin</td>
                        <td>Teknik Informatika</td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>Gufron Hasan</td>
                        <td>Teknik Informatika</td>
                      </tr>

                  </tbody>
                  </table>
                </div> 
            </div>
        </main>
    </div>
  )
}

export default Main