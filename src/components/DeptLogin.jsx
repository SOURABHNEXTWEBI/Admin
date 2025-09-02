// DeptLogin.js
import React, { useState } from "react";
import  { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "../style/Adminlogin.css"; // ✅ Reuse same CSS
import logo from "../assets/Logo.webp";

const DeptLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  //if the head is already logged in then redirect them to dash board redirect to dashboard
 useEffect(() => {
      if (sessionStorage.getItem("DeptHeadEmail")) {
        navigate("/head-dashboard");
      }
    }, [navigate]);


  // Handle form submission and move them to DeptHead Dashboard
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/head-dashboard");
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        {/* Logo */}
        <div className="logo-circle">
          <img src={logo} alt="NextWebi Logo" />
        </div>

        {/* Headings */}
        <h2 className="login-title">Welcome to</h2>
        <h3 className="portal-title">NextWebi Portal</h3>
        <p className="subheading">Department Head Login System</p>

        {/* Form */}
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            className="input-field"
          />

       <div className="password-wrapper">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    required
    className="input-field"
  />
  <span
    className="toggle-password"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? "🙈" : "👁️"}
  </span>
</div>


          <button type="submit" className="login-button">
            Login <FiArrowRight />
          </button>
        </form>

        {/* Support */}
        <p className="support-text">Need help accessing your account?</p>
        <a href="mailto:support@nextwebi.com" className="email-link">
          support@nextwebi.com
        </a>
      </div>
    </div>
  );
};

export default DeptLogin;
