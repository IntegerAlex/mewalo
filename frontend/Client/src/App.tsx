import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import HomePage from './Pages/HomePage'
import './App.css'
import { CartProvider } from './contexts/CartContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <ToastContainer 
  position="top-center"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
/>
    <CartProvider>
      <ToastContainer/>
      <Header/>
      <Outlet/>
      <Footer/>
      </CartProvider>
    </>
  )
}

export default App