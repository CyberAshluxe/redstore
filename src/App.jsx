import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Api from "./pages/Api";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Formik from "./pages/Formik";
;

const App = () => {
  let token = localStorage.getItem("token");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={token?<Home />:<Navigate to="/signin" />} />
        <Route path="/my-about" element={<About />} />
        <Route path="/about" element={<Navigate to="/my-about" />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/api" element={<Api />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/formik" element={<Formik />} />
      </Routes>
    </>
  );
};

export default App;
