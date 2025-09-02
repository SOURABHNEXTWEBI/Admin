import React, { useState  } from 'react';
import  { useEffect } from "react";
import { FiArrowRight } from 'react-icons/fi';
import '../style/Adminlogin.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.webp';

const AdminLogin = () => {
  const navigate = useNavigate();
    // Redirect to Dash booard when user is alredy logined
    useEffect(() => {
      if (sessionStorage.getItem("adminEmail")) {
        navigate("/admin-dashboard");
      }
    }, [navigate]);

  // State for email, password, and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check login credentials
    if (email === 'Adminnextwebi@gmail.com' && password === 'Admin@nextwebi') {
      setError('');
      sessionStorage.setItem('adminEmail', email);
      navigate('/admin-dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
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
        <p className="subheading">Admin Login System</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button">
            Login <FiArrowRight />
          </button>
        </form>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        <p className="support-text">Need help accessing your account?</p>
        <a href="mailto:support@nextwebi.com" className="email-link">
          support@nextwebi.com
        </a>
      </div>
    </div>
  );
};

export default AdminLogin;
