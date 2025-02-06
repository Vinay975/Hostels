import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import homecomig from "../../../public/homecomig.json";
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
            <Player
              autoplay
              loop
              src={homecomig}
              className="tellabout-lottie"
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
