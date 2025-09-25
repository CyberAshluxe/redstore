import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const addUser = (e) => {
    e.preventDefault();
    let newUser = { firstName, lastName, email, password };

    axios
      .post("https://class-work1.onrender.com/user/register", newUser)
      .then((res) => {
        console.log("Response:", res.data);
        setSuccess("Signup successful! Please login.");
        setError("");
        navigate("/signin");
      })
      .catch((err) => {
        console.error("Error:", err.response ? err.response.data : err);
        setError("Signup failed, try again.");
        setSuccess("");
      });
  };

  return (
    <div className="signup-container">
      <div className="form-box">
        <form className="form" onSubmit={addUser}>
          <span className="title">Sign up</span>
          <span className="subtitle">Create a free account with your email.</span>

          {error && <div className="alert error">{error}</div>}
          {success && <div className="alert success">{success}</div>}

          <div className="form-container">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn">Sign up</button>
        </form>

        <div className="form-section">
          <p>
            Have an account?{" "}
            <a href="/signin" className="link">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
