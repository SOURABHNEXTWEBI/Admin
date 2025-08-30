import React, { useState } from 'react';

const DeptLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="glitch-form-wrapper">
        <form className="glitch-card">
          {/* Header */}
          <div className="card-header">
            <div className="card-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M12 11.5a3 3 0 0 0 -3 2.824v1.176a3 3 0 0 0 6 0v-1.176a3 3 0 0 0 -3 -2.824z"></path>
              </svg>
              <span>DeptHead Login</span>
            </div>
            <div className="card-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Body */}
          <div className="card-body">
            <div className="form-group">
              <input type="email" id="username" name="username" required />
              <label htmlFor="username" className="form-label">
                Email Address
              </label>
            </div>

            <div className="form-group">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
              />
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <button type="submit" className="submit-btn">
              <span className="btn-text">DeptHead Login</span>
            </button>
          </div>
        </form>

        {/* Internal CSS */}
        <style>{`
          .glitch-form-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: White;
          }

          .glitch-card {
            background: #111;
            border-radius: 12px;
            padding: 1.5rem;
            width: 350px;
            color: #fff;
            box-shadow: 0 8px 20px rgba(0,0,0,0.5);
          }

          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
          }

          .card-title {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: bold;
            letter-spacing: 1px;
          }

          .card-dots span {
            display: inline-block;
            width: 6px;
            height: 6px;
            margin-left: 4px;
            background: #555;
            border-radius: 50%;
          }

          .card-body {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
          }

          .form-group {
            position: relative;
          }

          .form-group input {
            width: 100%;
            padding: 12px;
            border: none;
            outline: none;
            background: #1c1c1c;
            color: #fff;
            border-radius: 6px;
          }

          .form-label {
            position: absolute;
            top: -8px;
            left: 12px;
            font-size: 0.75rem;
            color: #888;
            background: #111;
            padding: 0 4px;
          }

          .toggle-password {
            position: absolute;
            top: 50%;
            right: 12px;
            transform: translateY(-50%);
            cursor: pointer;
            font-size: 1rem;
          }

          .submit-btn {
            padding: 12px;
            background: #4f46e5;
            border: none;
            border-radius: 6px;
            font-weight: bold;
            color: #fff;
            text-transform: uppercase;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .submit-btn:hover {
            background: #4338ca;
          }
        `}</style>
      </div>
    </>
  );
};

export default DeptLogin;
