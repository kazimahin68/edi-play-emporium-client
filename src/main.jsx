import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='h-full' style={{ backgroundImage: `url(https://i.ibb.co/8Xc3pDk/dark-hexagonal-background-with-gradient-color-79603-1410.png)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
    <React.StrictMode>
      <AuthProvider><RouterProvider router={Router}></RouterProvider></AuthProvider>
    </React.StrictMode>
  </div>
)
