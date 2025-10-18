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
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={loginUser}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
              className="form-input"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="auth-btn"
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

        <div className="form-section">
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="link">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="auth-modal">
          <div className="modal-content">
            <h4>✅ Login Successful</h4>
            <p>Redirecting to dashboard...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signin;
