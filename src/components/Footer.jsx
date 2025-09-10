import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 ">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand & Copy */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold">RedStore</h5>
            <p className="small mb-0">
              &copy; {new Date().getFullYear()} RedStore. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Follow Us</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
