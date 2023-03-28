import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'
import './base.scss'
import './g-font.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
