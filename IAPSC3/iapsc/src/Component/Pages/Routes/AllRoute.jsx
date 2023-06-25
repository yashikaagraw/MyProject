import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage'
import ProductPage from '../ProductPage'
import SingleProduct from '../SingleProduct'
import AboutPage from '../AboutPage'
import Contact from '../Contact'
import Login from '../Login'


const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/products/:id" element={<SingleProduct/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoute
