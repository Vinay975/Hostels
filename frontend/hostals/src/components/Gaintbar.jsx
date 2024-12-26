import React from "react"
import '../CSS/gaintbar.css'
import { IoSearch } from "react-icons/io5";
const Gaintbar = (props) => {
  return (
    <div className="bar">
      <input type="text" className="searchbar" /><div className="barr"><div className="icon"><IoSearch /></div></div>
    </div>
  )
};

export default Gaintbar;
