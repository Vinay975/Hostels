import "../Styles/owner.css";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Owner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate(); // Initialize navigation function

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleSignInClick = () => {
    navigate("/owner-side");
  };

  return (
    <div ref={ref} className={`owner-container ${isVisible ? "animate" : ""}`}>
      <div className="owner-heading">
        Hello! If you would like to advertise your hostel, PG, or apartments, feel free to use our platform. It's a simple and effective way to reach potential tenants. Sign in today to get started!
        <br />
        <button
          className={`sign-in-button ${isVisible ? "animate-button" : ""}`}
          onClick={handleSignInClick} // Handle button click
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Owner;
