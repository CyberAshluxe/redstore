import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Account from './pages/Account'
import Cart from './pages/Cart'

const App = () => {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    
    </>
  )
}

export default App


