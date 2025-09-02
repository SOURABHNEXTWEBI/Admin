// DeptHeadDashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/DeptHeadDashboard.css"; // External CSS file

export default function DeptHeadDashboard() {
  const navigate = useNavigate();

  const handleClick = (msg) => {
    msg === "deptform"
      ? navigate("/dept-form")
      : navigate("/Device-assigned");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        
        {/* Logo */}
        <div className="logo-wrapper">
          <div className="logo-circle">
            <img
              src="https://imgs.search.brave.com/aQP3fLJv8taV9V8Nj-JloDm9pQfmpdUDP4tPjfOWzhM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMueW91cnN0b3J5/LmNvbS9jcy9pbWFn/ZXMvY29tcGFuaWVz/LzgwODE2NWRlZjQz/ZC1VbnRpdGxlZGRl/c2lnbjE1LTE2MjAy/ODQzNTQ1OTIucG5n/P2ZtPWF1dG8mYXI9/MToxJm1vZGU9Zmls/bCZmaWxsPXNvbGlk/JmZpbGwtY29sb3I9/ZmZmJmZvcm1hdD1h/dXRvJnc9Mzg0JnE9/NzU"
              alt="NextWebi Logo"
              className="logo-img"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="dashboard-title">Welcome to Department Head Panel</h1>
        <h2 className="dashboard-subtitle">NextWebi Portal</h2>

        {/* Section Title */}
        <p className="section-title">Department-Head Controls</p>

        {/* Buttons */}
        <div className="button-group">
          <button
            className="dashboard-button"
            onClick={() => handleClick("deptform")}
          >
            Assign Project
            <svg fill="currentColor" viewBox="0 0 24 24" className="button-icon">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.1 3.89 23 5 23H11V21H5V3H13V9H21ZM20.31 16.9C20.69 16.9 21 17.2 21 17.6V18.4C21 18.8 20.69 19.1 20.31 19.1C19.93 19.1 19.6 18.8 19.6 18.4V17.6C19.6 17.2 19.93 16.9 20.31 16.9ZM22.74 20.3C22.74 20.7 22.41 21 22 21S21.26 20.7 21.26 20.3V19.7C21.26 19.3 21.59 19 22 19S22.74 19.3 22.74 19.7V20.3ZM19 16H21V14H19V16Z" />
            </svg>
          </button>

          <button
            className="dashboard-button"
            onClick={() => handleClick("deviceassigned")}
          >
            View Assigned Projects
            <svg fill="currentColor" viewBox="0 0 24 24" className="button-icon">
              <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
