import React from 'react'
import logo from '../assets/logo redstore.png'
import {ShoppingBag} from 'lucide-react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg transparent">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="Logo" width={120} class="d-inline-block align-text-top" />
      
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul class="navbar-nav gap-lg-4">
        <li class="nav-item">
          <Link class="nav-link disable" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link disable" aria-current="page" to="/products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link disable" aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link disable" aria-current="page" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link disable" aria-current="page" to="/account">Account</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link disable" aria-current="page" to="/cart"><ShoppingBag className="disable" /></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
