import React from "react"
import { FaRegBuilding } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { MdOutlineFoodBank } from "react-icons/md";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

import { useState } from "react";
import "./cats.css";
const Cats = (props) => {
    const [hotel, sethotel] = useState(false);
    const [rooms, setrooms] = useState(false);
    const [pgs, setpgs] = useState(false);
    const [apartments, setapartments] = useState(false);
    const cathotel = () => {
      
        sethotel(!hotel);
        setrooms(false);
        setpgs(false);
        setapartments(false);
    };
    const catrooms = () => {
        sethotel(false);
        setrooms(!rooms);
        setpgs(false);
        setapartments(false);
    };
    const catpgs = () => {
        sethotel(false);
        setrooms(false);
        setpgs(!pgs);
        setapartments(false);
    };
    const catapartments = () => {
        sethotel(false);
        setrooms(false);
        setpgs(false);
        setapartments(!apartments);
    };

 
    
 
    return (
        <div className="catsbar">
            <div className="menucats">
                <div className={hotel ? "option_active" :"option" } onClick={cathotel}><div className={hotel ? "active_icon":    "iconmenu"} ><MdOutlineFoodBank /> </div>
                    <p className="pcats">hotel</p>
                </div>
                <div className={rooms ? "option_active" :"option" } onClick={catrooms}><div className={rooms? "active_icon":    "iconmenu"}><FaBed /></div>
                <p className="pcats">Rooms</p>
                </div>
                <div className={pgs ? "option_active" :"option" } onClick={catpgs}><div className={pgs? "active_icon":    "iconmenu"}><HiOutlineBuildingOffice /></div>
                <p className="pcats">PG's</p>
                </div>
                <div className={apartments ? "option_active" :"option" } onClick={catapartments}><div className={apartments? "active_icon":    "iconmenu"}><FaRegBuilding /></div>
                <p className="pcats">Apartments</p>
                </div>
            </div>
        </div>
    )
};

export default Cats;    
