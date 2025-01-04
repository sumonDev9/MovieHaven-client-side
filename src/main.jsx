import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import MovieProvider from './Provider/MovieProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>
    <ToastContainer position="top-center" autoClose="1000" />
    <RouterProvider router={router} />
   </MovieProvider>
  </StrictMode>,
)
