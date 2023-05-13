import SideBar from '../SideBar/sidebar'
import css from './main.module.scss'
import React,{useState,useEffect} from 'react'
import Tabel from './tabel/tabel'


function Main() {
    useEffect(() => {
        document.title = 'admin - EasyRent'
      }, [])
  return (
    <div>
        <main className={`${css.bg} background_def`}>
            <div className={css.container}>
               <SideBar/>
                
                <Tabel/> 
            </div>
        </main>
    </div>
  )
}

export default Main