import React, { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div className="spinner-border text-info" role="status">
          {" "}
          <span className="visually-hidden"> Loading...</span>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            padding: "20px",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                textAlign: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  maxWidth: "100%",
                  height: "150px",
                  objectFit: "contain",
                  marginBottom: "8px",
                }}
              />
              <h3 style={{ fontSize: "1rem", marginBottom: "8px" }}>
                {product.title}
              </h3>
              <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                ${product.price}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#555",
                  marginBottom: "16px",
                }}
              >
                {product.category}
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#777",
                  marginBottom: "16px",
                }}
              >
                {product.rating.rate}
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#777",
                  marginBottom: "16px",
                }}
              >
                {product.rating.count} reviews
              </p>
              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Api;
