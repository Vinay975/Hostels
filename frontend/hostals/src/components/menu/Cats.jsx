import React from "react"
import { FaRegBuilding } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { MdOutlineFoodBank } from "react-icons/md";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

import { useState } from "react";
import "./cats.css";
const Cats = (props) => {
    // const [filterstate, setfilterstate] = useState("none");
    

    return (
        <div className="catsbar">
            <div className="menucats">
                <div className="option hotal"><div className="iconmenu"><MdOutlineFoodBank /> </div>
                    <p className="pcats">hotel</p>
                </div>
                <div className="option rooms"><div className="iconmenu"><FaBed /></div>
                <p className="pcats">Rooms</p>
                </div>
                <div className="option pgs"><div className="iconmenu"><HiOutlineBuildingOffice /></div>
                <p className="pcats">PG's</p>
                </div>
                <div className="option apartments"><div className="iconmenu"><FaRegBuilding /></div>
                <p className="pcats">Apartments</p>
                </div>
            </div>
        </div>
    )
};

export default Cats;    
