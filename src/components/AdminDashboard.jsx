import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div>
      {/* Internal CSS */}
      <style>{`
        .portal-container {
            min-height: 100vh;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            position: relative;
        }
        
        .portal-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.02)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.02)"/><circle cx="50" cy="10" r="1" fill="rgba(255,255,255,0.01)"/><circle cx="20" cy="80" r="1" fill="rgba(255,255,255,0.01)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            pointer-events: none;
        }
        
        .welcome-card {
            background: rgba(255, 255, 255, 0.98);
            border-radius: 25px;
            padding: 50px 40px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
            text-align: center;
            max-width: 550px;
            width: 100%;
            position: relative;
            z-index: 1;
            border: 2px solid rgba(15, 52, 96, 0.1);
        }
        
        .welcome-title {
            font-size: 2.8rem;
            font-weight: 800;
            color: #1a1a2e;
            margin-bottom: 8px;
            letter-spacing: -0.02em;
            position: relative;
        }
        
        .welcome-subtitle {
            font-size: 1.2rem;
            color: #0f3460;
            margin-bottom: 35px;
            font-weight: 500;
            letter-spacing: 0.5px;
        }
        
        .logo-container {
            margin-bottom: 35px;
        }
        
        .logo {
            width: 130px;
            height: 130px;
            background: linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            box-shadow: 0 15px 35px rgba(15, 52, 96, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.1);
            overflow: hidden;
            padding: 12px;
            border: 3px solid rgba(255, 255, 255, 0.15);
        }
        
        .logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 50%;
            background: white;
        }
        
        .login-mode-text {
            font-size: 1.3rem;
            font-weight: 600;
            color: #1a1a2e;
            margin-bottom: 30px;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: relative;
        }
        
        .login-mode-text::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #0f3460, #1a1a2e);
            border-radius: 2px;
        }
        
        .buttons-container {
            display: flex;
            flex-direction: column;
            gap: 18px;
        }
        
        .button {
            position: relative;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 8px 25px rgba(15, 52, 96, 0.25);
            padding: 18px 32px;
            background: linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #ffffff;
            gap: 15px;
            font-weight: 600;
            border: 2px solid rgba(255, 255, 255, 0.1);
            outline: none;
            overflow: hidden;
            font-size: 17px;
            width: 100%;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .icon {
            width: 22px;
            height: 22px;
            transition: all 0.4s ease;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }
        
        .button:hover {
            transform: translateY(-3px) scale(1.02);
            border-color: rgba(255, 255, 255, 0.25);
            box-shadow: 0 15px 35px rgba(15, 52, 96, 0.4);
            background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%);
        }
        
        .button:hover .icon {
            transform: translateX(5px) rotate(5deg);
        }
        
        .button:active {
            transform: translateY(-1px) scale(0.98);
        }
        
        .button::before {
            content: "";
            position: absolute;
            width: 0;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
            top: 0;
            left: -100%;
            transition: all 0.6s;
        }
        
        .button:hover::before {
            width: 100%;
            left: 100%;
        }
        
        @media (max-width: 600px) {
            .welcome-card {
                padding: 30px 20px;
            }
            .welcome-title {
                font-size: 2rem;
            }
            .logo {
                width: 100px;
                height: 100px;
            }
        }
      `}</style>

      {/* Main Content */}
      <div className="portal-container">
        <div className="welcome-card">
          <h1 className="welcome-title">Welcome to Admin Panel</h1>
          <h2 className="welcome-subtitle">NextWebi Portal</h2>

          <div className="logo-container">
            <div className="logo">
              <img
                src="https://imgs.search.brave.com/aQP3fLJv8taV9V8Nj-JloDm9pQfmpdUDP4tPjfOWzhM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMueW91cnN0b3J5/LmNvbS9jcy9pbWFn/ZXMvY29tcGFuaWVz/LzgwODE2NWRlZjQz/ZC1VbnRpdGxlZGRl/c2lnbjE1LTE2MjAy/ODQzNTQ1OTIucG5n/P2ZtPWF1dG8mYXI9/MToxJm1vZGU9Zmls/bCZmaWxsPXNvbGlk/JmZpbGwtY29sb3I9/ZmZmJmZvcm1hdD1h/dXRvJnc9Mzg0JnE9/NzU"
                alt="NextWebi Logo"
              />
            </div>
          </div>

          <p className="login-mode-text">Admin Controls</p>

          <div className="buttons-container">
            <button className="button">
              Add Department Head
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.1 3.89 23 5 23H11V21H5V3H13V9H21ZM20.31 16.9C20.69 16.9 21 17.2 21 17.6V18.4C21 18.8 20.69 19.1 20.31 19.1C19.93 19.1 19.6 18.8 19.6 18.4V17.6C19.6 17.2 19.93 16.9 20.31 16.9ZM22.74 20.3C22.74 20.7 22.41 21 22 21S21.26 20.7 21.26 20.3V19.7C21.26 19.3 21.59 19 22 19S22.74 19.3 22.74 19.7V20.3ZM19 16H21V14H19V16Z" />
              </svg>
            </button>

            <button className="button">
              View Department Heads
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
