import React from "react"
import { Link } from "react-router-dom";
import "../../../src/components/addYourHome/addurhomeCSS/maincontainer.css"

const Addurhome = (props) => {

  return (
    <>
      <div className='tellabout-Container'>
        <div className='tellabout-subcontainer'>
          <div className='tellabout-matter'>
          <span><h1>Tell us about your place</h1>s
          In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.</span>
          </div>
          <div className='tellabout-animation'>Animation</div>
        </div>
        <Link to="/describleplace">
          <button className='tellabout-button'>Next</button>
        </Link>
      </div>
    </>
  )
};

export default Addurhome;
