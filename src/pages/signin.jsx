import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("https://class-work1.onrender.com/user/login", {
        email,
        password,
      });

      console.log("Response:", res.data);

      // ✅ If login is successful
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);

        setShowModal(true); // show success modal

        // redirect after 2s
        setTimeout(() => {
          navigate("/");
        });
      } else {
        setError(res.data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Error:", err.response ? err.response.data : err);
      setError("Login failed. Please check your email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "transparent",
      }}
    >
      <div className="card p-4 shadow-lg border-0" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Sign In</h2>

        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={loginUser}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
              className="form-control"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-100"
          >
            {loading ? (
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
            ) : null}
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>

      {/* ✅ Force modal to show */}
      {showModal && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.6)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center p-4">
              <h4 className="text-success">✅ Login Successful</h4>
              <p>Redirecting to dashboard...</p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
    
  );
};

export default Signin;
