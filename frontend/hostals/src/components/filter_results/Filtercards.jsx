import React from "react"
import "./filters.css";

const Filtercards = (props) => {
    var list = props.placetags;
  return (
   
      <div className="placecard">
            <div><img className="image" src={props.datapic} alt="" /></div>
            <div className="info">
               <div className="line1"> <div className="place title">
                {props.name}</div>
                <div className="place rating">&#x2B50;4.3</div></div>
               <div className="place location">{props.location}</div>
               <div className="place tags">{props.category}</div>
                <div className="place price">{props.price}</div>
            </div>
            </div>

  )
};

export default Filtercards;
