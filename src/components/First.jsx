import React from 'react'
import '../style/First.css'


export default function First() {
  return (
    <div>
 <div className="portal-container">
        <div className="welcome-card">
          <h1 className="welcome-title">Welcome to</h1>
          <h2 className="welcome-subtitle">NextWebi Portal</h2>
          
          <div className="logo-container">
            <div className="logo">
             <img src="https://imgs.search.brave.com/aQP3fLJv8taV9V8Nj-JloDm9pQfmpdUDP4tPjfOWzhM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMueW91cnN0b3J5/LmNvbS9jcy9pbWFn/ZXMvY29tcGFuaWVz/LzgwODE2NWRlZjQz/ZC1VbnRpdGxlZGRl/c2lnbjE1LTE2MjAy/ODQzNTQ1OTIucG5n/P2ZtPWF1dG8mYXI9/MToxJm1vZGU9Zmls/bCZmaWxsPXNvbGlk/JmZpbGwtY29sb3I9/ZmZmJmZvcm1hdD1h/dXRvJnc9Mzg0JnE9/NzU" alt="" />
            </div>
          </div>
          
          <p className="login-mode-text">Select Your Login Mode</p>
          
          <div className="buttons-container">
            <button className="button">
              Admin Login
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
            
            <button className="button">
              Department Head Login
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}
