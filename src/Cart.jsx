import React from "react";
import { useCart } from "./contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <section className="container py-5 min-vh-100">
      <h1 className="fw-bold mb-4 text-center">Shopping Cart</h1>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="table-responsive">
            <table className="table align-middle bg-white shadow-sm">
              <thead className="table-light">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      Your cart is empty.
                    </td>
                  </tr>
                ) : (
                  cart.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                          }}
                          className="rounded"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          className="form-control form-control-sm w-50 mx-auto"
                          onChange={(e) =>
                            updateQuantity(
                              item.name,
                              Math.max(1, Number(e.target.value))
                            )
                          }
                        />
                      </td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => removeFromCart(item.name)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-end mt-4">
            <div className="card p-3 shadow-sm" style={{ minWidth: "250px" }}>
              <h5 className="fw-bold mb-3">Cart Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${getTotal()}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>$5.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>${(parseFloat(getTotal()) + 5).toFixed(2)}</span>
              </div>
              <button className="btn btn-danger w-100 mt-3 rounded-pill">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
