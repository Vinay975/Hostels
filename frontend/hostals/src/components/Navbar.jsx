import React from "react";
import "../CSS/navbar.css";
import { Outlet, Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Gaintbar from "./Gaintbar";
const Navbar = () => {
    return (
        <>
            <nav className="topnav">
                <div className="logo"><a href="/">Logo</a></div>
                <Link to="/" className="Link"><div className="location">Location</div></Link>
    <Link to="/ownerdashboard" className="Link"><div className="navdiv b">Add Your Place</div></Link>
    <div className="c"><IoMenuSharp /><CgProfile /></div>

            </nav>
            <Gaintbar/>
        </>
    )
};
export default Navbar;