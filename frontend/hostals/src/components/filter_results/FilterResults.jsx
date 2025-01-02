import React from "react"
import "./filters.css";

const FilterResults = (props) => {
  return (
    <div className="filterresults">
        
         <div className="placecards">
            <div className="placecard">
            <div><img className="image" src="https://a0.muscache.com/im/pictures/d5962b48-8d1d-4dd0-bba6-101137cbe973.jpg?im_w=720&im_format=avif" alt="" /></div>
            <div className="info">
                <h2 className="">Hostel Name</h2>
                <p>Location</p>
                <p>Price</p>
            </div>
            </div>
         </div>
        
    </div>
  )
};

export default FilterResults;
