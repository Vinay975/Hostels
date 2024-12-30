import React, { useState } from "react";
import "../CSS/navbar.css";
import { Outlet, Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Gaintbar from "./Gaintbar";
import Userin from "./Userin";

const Navbar = () => {
    const [clicked , setclicked] = useState(false);
    const profile_action = ()=>{
        setclicked(!clicked);
        
    }
    return (
        <>
           <div className="topbar">
           <nav className="topnav">
                <div className="logo"><a href="/">Logo</a></div>
                <Link to="/" className="Link"><div className="location">Location</div></Link>
    <Link to="/Addyourhome" className="Link"><div className="navdiv b">Add Your Place</div></Link>
    <div className="c" onClick={profile_action}><IoMenuSharp/><CgProfile /></div>
            </nav>
            <Gaintbar/>
           {clicked && ( <Userin/>)}
           </div>
        </>
    )
};
export default Navbar;