import React from "react"
import "../CSS/userin.css"
import { Outlet, Link } from "react-router-dom";

const Userin = (props) => {
  return (
    <div  className="options">
      <Link to="/Login" className="Link"><div className="profile signin">LogIn</div></Link>
      <Link to="/Signin" className="Link"><div className="profile login">SignIn</div></Link>
      <Link to="/Addyourhome" className="Link"><div className="profile addur">Add Your Place</div></Link>

    </div>
    // <OutletOutlet/>
  )
};

export default Userin;
    
