import React, { useState } from "react";

const Account = () => {
  const [user, setUser] = useState({
    name: "Ash Luxe",
    email: "ashluxe124@gmail.com",
    avatar: "https://i.pravatar.cc/100", // random avatar
  });

  const [password, setPassword] = useState("");
  const [preferences, setPreferences] = useState({
    newsletter: true,
    darkMode: false,
  });

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePreferencesChange = (e) => {
    const { name, checked } = e.target;
    setPreferences({ ...preferences, [name]: checked });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Account settings updated successfully ✅");
    setPassword("");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      {/* Account Header */}
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>My Account</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem", color: "#555" }}>
        Manage your account settings and preferences.
      </p>

      {/* Profile Section */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "2rem",
        background: "#f9f9f9",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
      }}>
        <img
          src={user.avatar}
          alt="User Avatar"
          style={{ borderRadius: "50%", width: "80px", height: "80px" }}
        />
        <div>
          <h3 style={{ margin: "0" }}>{user.name}</h3>
          <p style={{ margin: "0", color: "#666" }}>{user.email}</p>
        </div>
      </div>

      {/* Account Settings Form */}
      <form
        onSubmit={handleSave}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          background: "#fff",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        {/* Password Change */}
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            Change Password
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={handlePasswordChange}
            style={{ padding: "0.8rem", borderRadius: "5px", border: "1px solid #ccc", width: "100%" }}
          />
        </div>

        {/* Preferences */}
        <div>
          <label>
            <input
              type="checkbox"
              name="newsletter"
              checked={preferences.newsletter}
              onChange={handlePreferencesChange}
              style={{ marginRight: "0.5rem" }}
            />
            Subscribe to Newsletter
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="darkMode"
              checked={preferences.darkMode}
              onChange={handlePreferencesChange}
              style={{ marginRight: "0.5rem" }}
            />
            Enable Dark Mode
          </label>
        </div>

        {/* Save Button */}
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
          Save Changes
        </button>
      </form>

      {/* Actions */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button
          style={{
            padding: "0.8rem 1.2rem",
            background: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "1rem",
          }}
        >
          Logout
        </button>
        <button
          style={{
            padding: "0.8rem 1.2rem",
            background: "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Account;

