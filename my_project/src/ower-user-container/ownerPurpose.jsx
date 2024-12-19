import React, { useState } from "react";
import "../Styles/ownerside.css";

export const UniqueMainOwnerClass = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="unique-ownerside-container">
      {/* Left Box - Static Content */}
      <div
        className={`unique-ownerside-left-box ${
          isSignUp ? "unique-ownerside-shift-left" : ""
        }`}
      >
        {isSignUp ? (
          <div className="unique-ownerside-content">
            <h2>Welcome, Guest!</h2>
            <p>Join us today to explore our platform.</p>
            <button onClick={toggleMode}>Sign In</button>
          </div>
        ) : (
          <div className="unique-ownerside-content">
            <h2>Welcome Back!</h2>
            <p>To keep connected, please log in with your details.</p>
            <button onClick={toggleMode}>Create Account</button>
          </div>
        )}
      </div>

      {/* Right Box - Forms */}
      <div
        className={`unique-ownerside-right-box ${
          isSignUp ? "unique-ownerside-shift-right" : ""
        }`}
      >
        {isSignUp ? (
          <form>
            <h2>Sign Up</h2>
            <div className="unique-ownerside-input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" required />
            </div>
            <div className="unique-ownerside-input-group">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="unique-ownerside-input-group">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        ) : (
          <form>
            <h2>Sign In</h2>
            <div className="unique-ownerside-input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" required />
            </div>
            <div className="unique-ownerside-input-group">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit">Sign In</button>
          </form>
        )}
      </div>
    </div>
  );
};
