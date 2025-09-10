import React from 'react'
import logo from '../assets/logo redstore.png'
import {ShoppingBag} from 'lucide-react'
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-transparent">
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
          <a class="nav-link disable" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disable" aria-current="page" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disable" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disable" aria-current="page" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disable" aria-current="page" href="#">Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disable" aria-current="page" href="#"><ShoppingBag className="disable" /></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
