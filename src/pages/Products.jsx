import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
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
import { Star, Search } from "lucide-react";

const products = [
  { name: "Red Printed T-Shirt", image: product1, price: "$49.99", rating: 5 },
  { name: "Black Sneakers", image: product2, price: "$39.99", rating: 4 },
  { name: "Blue Trainers", image: product3, price: "$44.99", rating: 4 },
  { name: "Classic Blue Polo", image: product4, price: "$54.99", rating: 5 },
  { name: "Sporty Running Shoes", image: product5, price: "$59.99", rating: 5 },
  { name: "Casual Slip-Ons", image: product6, price: "$29.99", rating: 4 },
  { name: "High-Top socks", image: product7, price: "$69.99", rating: 5 },
  { name: "Exclusive Watch", image: product8, price: "$39.99", rating: 4 },
  { name: "Classic Loafers", image: product9, price: "$49.99", rating: 5 },
  { name: "Sporty Slides", image: product10, price: "$29.99", rating: 4 },
  { name: "Elegant Heels", image: product11, price: "$79.99", rating: 5 },
  { name: "Casual Flats", image: product12, price: "$34.99", rating: 4 },
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const { addToCart } = useCart();

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      p.rating >= minRating
  );



  return (
    <section className="bg-light py-5 min-vh-100">
      <div className="container">
        <h1 className="fw-bold text-center mb-4">All Products</h1>
        <div className="row mb-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <Search size={18} />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-3 mt-md-0">
            <div className="d-flex align-items-center gap-2">
              <span>Min Rating:</span>
              {[1, 2, 3, 4, 5].map((r) => (
                <span
                  key={r}
                  style={{ cursor: "pointer" }}
                  onClick={() => setMinRating(r)}
                >
                  <Star
                    fill={r <= minRating ? "#FFD700" : "none"}
                    stroke={r <= minRating ? "#FFD700" : "#ccc"}
                  />
                </span>
              ))}
              <button
                className="btn btn-sm btn-outline-secondary ms-2"
                onClick={() => setMinRating(0)}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {filteredProducts.length === 0 ? (
            <div className="col-12 text-center">
              <p className="lead">No products found.</p>
            </div>
          ) : (
            filteredProducts.map((product, idx) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch"
                key={idx}
              >
                <div className="card w-100 h-100 shadow-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <div
                      className="mb-2"
                      style={{ color: "#FFD700", fontSize: "1.1rem" }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          fill={i < product.rating ? "#FFD700" : "none"}
                          stroke={i < product.rating ? "#FFD700" : "#ccc"}
                        />
                      ))}
                    </div>
                    <div className="fw-bold mb-2">{product.price}</div>
                    <button
                      className="btn btn-danger mt-auto rounded-pill"
                      onClick={() =>
                        addToCart({
                          name: product.name,
                          price: Number(product.price.replace("$", "")),
                          image: product.image,
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
