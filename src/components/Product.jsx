import React from "react";

import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import product4 from "../assets/product-4.jpg";
import product5 from "../assets/product-5.jpg";
import product6 from "../assets/product-6.jpg";
import product7 from "../assets/product-7.jpg";
import product8 from "../assets/product-8.jpg";
import product9 from "../assets/product-9.jpg";
import product10 from "../assets/product-10.jpg";
import product11 from "../assets/product-11.jpg";
import product12 from "../assets/product-12.jpg";
import { Star } from "lucide-react";

const products = [
  {
    name: "Red Printed T-Shirt",
    image: product1,

    price: "$49.99",
    rating: 5,
  },
  {
    name: "Black Sneakers",
    image: product2,

    price: "$39.99",
    rating: 4,
  },
  {
    name: "Blue Trainers",
    image: product3,

    price: "$44.99",
    rating: 4,
  },
  {
    name: "Classic White Shoes",
    image: product4,

    price: "$54.99",
    rating: 5,
  },
  { name: "Sporty Running Shoes", image: product5, price: "$59.99", rating: 5 },
  { name: "Casual Slip-Ons", image: product6, price: "$29.99", rating: 4 },
  { name: "High-Top Sneakers", image: product7, price: "$69.99", rating: 5 },
  { name: "Trendy Sandals", image: product8, price: "$39.99", rating: 4 },
  { name: "Classic Loafers", image: product9, price: "$49.99", rating: 5 },
  { name: "Sporty Slides", image: product10, price: "$29.99", rating: 4 },
  { name: "Elegant Heels", image: product11, price: "$79.99", rating: 5 },
  { name: "Casual Flats", image: product12, price: "$34.99", rating: 4 },
];

const Product = () => {
  return (
    <>
      <section className="text-center bg-light py-5">
        <h1>Featured Products</h1>
        <div className="container">
          <div className="row justify-content-between g-4 mt-3">
            {products.slice(0, 4).map((product, idx) => (
              <div
                className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch"
                key={idx}
              >
                <div className="card p-0 w-100 h-100">
                  <div className="card-img">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <h5>{product.name}</h5>
                    <div style={{ color: "#FFD700", fontSize: "1.2rem" }}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          fill={i < product.rating ? "#FFD700" : "none"}
                          stroke={i < product.rating ? "#FFD700" : "#ccc"}
                        />
                      ))}
                    </div>
                    <div className="fw-bold mb-2">{product.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="text-center bg-light py-5">
        <h2>New Arrivals</h2>
        <div className="container">
          <div className="row justify-content-between g-4 mt-3">
            {products.slice(4, 12).map((product, idx) => (
              <div
                className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch"
                key={idx}
              >
                <div className="card p-0 w-100 h-100">
                  <div className="card-img">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <h5>{product.name}</h5>
                    <div style={{ color: "#FFD700", fontSize: "1.2rem" }}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          fill={i < product.rating ? "#FFD700" : "none"}
                          stroke={i < product.rating ? "#FFD700" : "#ccc"}
                        />
                      ))}
                    </div>
                    <div className="fw-bold mb-2">{product.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
