import React from "react";
import { Facebook, Twitter, Instagram, LogIn, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  return (
    <footer className="bg-dark text-light py-5 ">
      <div className="container">
        <div className="row text-center text-md-start align-items-start">
          {/* Brand & Copy */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="fw-bold">RedStore</h5>
            <p className="small mb-0">
              &copy; {new Date().getFullYear()} RedStore. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/products" className="text-light text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className="fw-semibold mb-3">Follow Us</h6>
            <div className="d-flex flex-column gap-2">
              <a
                href="#"
                className="text-light text-decoration-none d-flex align-items-center gap-1"
              >
                <Facebook size={18} /> Facebook
              </a>
              <a
                href="#"
                className="text-light text-decoration-none d-flex align-items-center gap-1"
              >
                <Twitter size={18} /> Twitter
              </a>
              <a
                href="#"
                className="text-light text-decoration-none d-flex align-items-center gap-1"
              >
                <Instagram size={18} /> Instagram
              </a>
            </div>
          </div>

          {/* Login / Logout Button */}
          <div className="col-md-3 d-flex flex-column align-items-md-start align-items-center mt-4 mt-md-0">
            <h6 className="fw-semibold mb-3">Account</h6>
            {token ? (
              <button
                onClick={handleLogout}
                className="btn btn-outline-light d-flex align-items-center gap-2"
              >
                <LogOut size={18} /> Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="btn btn-primary d-flex align-items-center gap-2"
              >
                <LogIn size={18} /> Login
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
