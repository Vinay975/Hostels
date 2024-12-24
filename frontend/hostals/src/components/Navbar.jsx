import react from "react"
import {Outlet,Link} from "react-router-dom";
const Navbar = () => {
    return(
        <>
        <nav className="nav">
      <div className="logo"><a href="/">Hostals</a></div>
    <Link to="/" className="Link"><div className="navdiv a">Add Your Place</div></Link>
    <Link to="/aboutus" className="Link"><div className="navdiv b">location</div></Link>
    <Link to="/login" className="Link"><div className="navdiv c">profile</div></Link>    
    </nav>
    <Outlet/>
        </>
    )
};
export default Navbar;