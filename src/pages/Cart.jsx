import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    setIsCheckoutLoading(true);
    // Simulate checkout process
    setTimeout(() => {
      alert("Checkout completed successfully!");
      setIsCheckoutLoading(false);
    }, 1500);
  };

  const handleQuantityChange = (name, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(name);
    } else {
      updateQuantity(name, newQuantity);
    }
  };

  // Calculate shipping (free over $50)
  const subtotal = parseFloat(getTotal());
  const shippingCost = subtotal > 50 ? 0 : 5;

  return (
    <section className="container py-3 py-md-5 min-vh-100">
      <h1 className="fw-bold mb-3 mb-md-4 text-center text-primary">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-5">
          <div className="mb-4">
            <i className="bi bi-cart-x display-1 text-muted"></i>
          </div>
          <p className="fs-5 text-muted">Your cart is empty.</p>
          <button className="btn btn-primary mt-3 rounded-pill px-4">
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {/* Mobile View - Card Layout */}
          <div className="d-lg-none">
            {cart.map((item) => (
              <div key={item.name} className="card shadow-sm mb-3 border-0">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded shadow-sm"
                        style={{ width: "100%", height: "80px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-9">
                      <div className="d-flex justify-content-between align-items-start">
                        <h6 className="fw-semibold mb-1 text-truncate">{item.name}</h6>
                        <button
                          className="btn btn-sm btn-outline-danger rounded-circle p-1"
                          onClick={() => removeFromCart(item.name)}
                          title="Remove item"
                        >
                          <i className="bi bi-x-lg"></i>
                        </button>
                      </div>
                      <p className="mb-1">${item.price.toFixed(2)}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="input-group input-group-sm" style={{ width: "120px" }}>
                          <button 
                            className="btn btn-outline-secondary"
                            onClick={() => handleQuantityChange(item.name, item.quantity - 1)}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            className="form-control text-center"
                            onChange={(e) => handleQuantityChange(item.name, parseInt(e.target.value))}
                          />
                          <button 
                            className="btn btn-outline-secondary"
                            onClick={() => handleQuantityChange(item.name, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <span className="fw-bold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Table Layout */}
          <div className="d-none d-lg-block">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="shadow-sm border-0 overflow-hidden">
                  <div className="table-responsive">
                    <table className="table align-middle mb-0">
                      <thead className="table-light">
                        <tr>
                          <th scope="col" className="ps-4">Product</th>
                          <th scope="col">Details</th>
                          <th scope="col" className="text-center">Price</th>
                          <th scope="col" className="text-center">Quantity</th>
                          <th scope="col" className="text-center">Total</th>
                          <th scope="col" className="text-end pe-4">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.name} className="border-top">
                            <td className="ps-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                  className="rounded shadow-sm"
                                />
                              </div>
                            </td>
                            <td>
                              <h6 className="mb-1 fw-semibold">{item.name}</h6>
                            </td>
                            <td className="text-center">
                              <span className="fw-semibold">${item.price.toFixed(2)}</span>
                            </td>
                            <td className="text-center">
                              <div className="d-flex justify-content-center">
                                <div className="input-group input-group-sm" style={{ width: "120px" }}>
                                  <button 
                                    className="btn btn-outline-secondary"
                                    onClick={() => handleQuantityChange(item.name, item.quantity - 1)}
                                  >
                                    -
                                  </button>
                                  <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    className="form-control text-center"
                                    onChange={(e) => handleQuantityChange(item.name, parseInt(e.target.value))}
                                  />
                                  <button 
                                    className="btn btn-outline-secondary"
                                    onClick={() => handleQuantityChange(item.name, item.quantity + 1)}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">
                              <span className="fw-bold text-primary">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </td>
                            <td className="text-end pe-4">
                              <button
                                className="btn btn-sm btn-outline-danger rounded-circle"
                                onClick={() => removeFromCart(item.name)}
                                title="Remove item"
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cart Summary - For both mobile and desktop */}
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-8 col-lg-5">
              <div className="card border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
                <div className="card-body">
                  <h5 className="card-title fw-bold border-bottom pb-3">Cart Summary</h5>
                  
                  <div className="d-flex justify-content-between py-2">
                    <span>Subtotal:</span>
                    <span>${getTotal()}</span>
                  </div>
                  
                  <div className="d-flex justify-content-between py-2">
                    <span>
                      Shipping:
                      {shippingCost === 0 && (
                        <span className="text-success ms-1">(Free shipping!)</span>
                      )}
                    </span>
                    <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
                  </div>
                  
                  {subtotal < 50 && (
                    <div className="alert alert-info py-2 small">
                      <i className="bi bi-info-circle me-1"></i>
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </div>
                  )}
                  
                  <div className="d-flex justify-content-between py-2 border-top mt-2">
                    <strong>Total:</strong>
                    <strong className="text-primary">
                      ${(subtotal + shippingCost).toFixed(2)}
                    </strong>
                  </div>
                  
                  <button 
                    className="btn btn-primary w-100 mt-3 rounded-pill py-2 fw-semibold"
                    onClick={handleCheckout}
                    disabled={isCheckoutLoading}
                  >
                    {isCheckoutLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Processing...
                      </>
                    ) : (
                      "Proceed to Checkout"
                    )}
                  </button>
                  
                  <div className="text-center mt-3">
                    <a href="#" className="text-decoration-none">
                      <i className="bi bi-arrow-left me-1"></i>
                      Continue Shopping
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;