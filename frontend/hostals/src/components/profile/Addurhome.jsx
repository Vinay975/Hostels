import React from "react";
import { Link } from "react-router-dom";
import "../../../src/components/addYourHome/addurhomeCSS/maincontainer.css";


const Addurhome = (props) => {
  return (
    <>
      <div className="tellabout-Container">
        <div className="tellabout-subcontainer">
          <div className="tellabout-matter">
            <h1 className="typewriter">Tell us about your place</h1>
            <p>
              In this step, we'll ask you which type of property you have and if
              guests will book the entire place or just a room. Then let us know
              the location and how many guests can stay.
            </p>
          </div>
          <div className="tellabout-animation">
            <video
              src="/animated.webm"
              autoPlay
              loop
              muted
              className="tellabout-video"
            />
          </div>
        </div>
        <Link to="/describleplace">
          <button className="tellabout-button">
            Next <span className="arrow">→</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Addurhome;
