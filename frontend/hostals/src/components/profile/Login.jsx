import React from "react"
import { useState } from "react";
import "../../CSS/loginsignin.css"
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  // Form validation
  const isLoginFormValid = email.trim() !== "" && password.trim() !== "";
  const isSignupFormValid =
    signupEmail.trim() !== "" &&
    signupPassword.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    signupPassword === confirmPassword;

  // Handle form submission
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (isLoginFormValid) {
      console.log("Login submitted with:", { email, password });
    } else {
      console.log("Login form is incomplete.");
    }
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    if (isSignupFormValid) {
      console.log("Signup submitted with:", {
        email: signupEmail,
        password: signupPassword,
      });
    } else {
      console.log("Signup form is incomplete or passwords do not match.");
    }
  };

  return (
    <div className="login-signup-container">
      {isLogin ? (
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <h2 className="login-title">Login</h2>
            <div className="form-group">
              <label className="form-label">Email</label>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  className="form-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-footer">
              <a href="#forgot-password" className="forgot-password-link">
                Forgot Password?
              </a>
              <button
                type="submit"
                className="submit-button"
                disabled={!isLoginFormValid}
              >
                Submit
              </button>
            </div>
          </form>
          <p className="switch-form-text">
            Don't have an account?{' '}
            <span className="switch-form-link" onClick={() => setIsLogin(false)}>
              Sign up here
            </span>
          </p>
        </div>
      ) : (
        <div className="signup-form-container">
          <form className="signup-form" onSubmit={handleSignupSubmit}>
            <h2 className="signup-title">Sign Up</h2>
            <div className="form-group">
              <label className="form-label">Email</label>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  className="form-input"
                  placeholder="Enter your password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  className="form-input"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-footer">
              <button
                type="submit"
                className="submit-button"
                disabled={!isSignupFormValid}
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="switch-form-text">
            Already have an account?{' '}
            <span className="switch-form-link" onClick={() => setIsLogin(true)}>
              Login here
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
