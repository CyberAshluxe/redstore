import React, { useState } from "react";

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      {/* Page Title */}
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Contact Us</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem", color: "#555" }}>
        Have questions or need help? We’d love to hear from you.
      </p>

      {/* Contact Information */}
      <div style={{ marginBottom: "2rem", textAlign: "center" }}>
        <p><strong>Email:</strong> support@example.com</p>
        <p><strong>Phone:</strong> +234 814 668 0963</p>
        <p><strong>Address:</strong> 123 Tech Street, Lagos, Nigeria</p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          background: "#f9f9f9",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "0.8rem", borderRadius: "5px", border: "1px solid #ccc" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "0.8rem", borderRadius: "5px", border: "1px solid #ccc" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ padding: "0.8rem", borderRadius: "5px", border: "1px solid #ccc" }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: "0.8rem",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

