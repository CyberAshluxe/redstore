import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Cardsection from './components/Cardsection'
import Product from './components/Product'
import Exclusive from './components/Exclusive'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <Cardsection />
      <Product />
      <Exclusive />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App


