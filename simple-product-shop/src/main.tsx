import React from 'react'
import ReactDOM from 'react-dom/client'
import AppWrapper from './routes'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
