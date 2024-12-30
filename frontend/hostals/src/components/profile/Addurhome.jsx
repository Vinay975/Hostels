import React from "react"
import { Link } from "react-router-dom";
const Addurhome = (props) => {


  return (
    <>
      <div className='tellabout-Container'>
        <div className='tellabout-subcontainer'>
          <div className='tellabout-matter'>Matter</div>
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
