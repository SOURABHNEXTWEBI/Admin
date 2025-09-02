import React from 'react';
import logo from '../assets/Logo.webp';
import { useNavigate } from 'react-router-dom';
import '../style/First.css';
export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      {/* Left Side */}
      <div className="left-panel">
       
        <h2 className="headline">
          Imagination Meets, <br /><span className="highlight">Implementation</span>
        </h2>
        <p className="description">
          Leading AI-Enabled IT Solutions for Digital Transformation.
          Trusted by 600+ enterprises across 20+ nations.
        </p>
        <div className="metrics-grid">
          <div className="metric-box"><strong>9+</strong><br />Years in Business</div>
          <div className="metric-box"><strong>1600+</strong><br />Projects Delivered</div>
          <div className="metric-box"><strong>600+</strong><br />Client Relationships</div>
          <div className="metric-box"><strong>20+</strong><br />Countries Served</div>
        </div>
        <div className="certifications">
          <span className="cert-icon">🛡️</span> ISO 27001 Certified
          <span className="divider">|</span>
          <span className="cert-icon">🔑</span> Google Partner
        </div>
      </div>

      {/* Right Side */}
      <div className="right-panel">
        <div className="card">
          <div className="logo-circle"><img src={logo} alt="" /></div>
          <h2 className="welcome-text">Welcome to</h2>
          <h3 className="portal-name">NextWebi Portal</h3>
          <p className="subtext">Professional Workflow Management System</p>
          <p className="login-instruction">Select Your Login Mode</p>

          <div className="login-buttons">
            <button className="login-btn admin" onClick={() => navigate('/adminlogin')}>
              <span className="icon">&#128663;</span>
              <div>
                <div className="btn-title">Admin Login</div>
                <div className="btn-subtitle">CEO & Administrative Access</div>
              </div>
              <span className="arrow">&rarr;</span>
            </button>

            <button className="login-btn dept" onClick={() => navigate('/dept-headlogin')}>
              <span className="icon">&#128100;</span>
              <div>
                <div className="btn-title">Department Head</div>
                <div className="btn-subtitle">Departmental Management Access</div>
              </div>
              <span className="arrow">&rarr;</span>
            </button>
          </div>

          <div className="secure-box">
            <span className="secure-icon">&#128274;</span>
            <div>
              <div className="secure-title">Secure Login Portal</div>
              <div className="secure-subtext">Your data is protected with enterprise-grade security</div>
            </div>
          </div>

          <p className="footer-text">Need assistance accessing your account?</p>
          <a href="mailto:support@nextwebi.com" className="support-link">Contact Support</a>
        </div>
      </div>
    </div>
  );
}
