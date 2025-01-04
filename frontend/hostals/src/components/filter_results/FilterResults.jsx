import React from "react"
import "./filters.css";
import placedata from "../data/Placedata";
const FilterResults = (props) => {

  return (
    <div className="filterresults">
        
        
        <div className="placecards">
        
        {placedata.map((place, index) => {
            
                // <div className="placecard" key={index}>
                //     <img src={place.datapic} alt="place" />
                //     <h3>{place.name}</h3>
                    
                //     <p>{place.location}</p>
                //     <p>{place.price}</p>
                //     <div className="placetags">
                //         {place.placetags.map((tag, index) => {
                //             return <span key={index}>{tag}, </span>
                //         })}
                //     </div>
                // </div>
             return(
                <div className="placecard">
                <div><img className="image" src={place.datapic} alt="" /></div>
                <div className="info">
                   <div><div className="line1"> <div className="place title">
                   {place.name}</div>
                    </div>
                    <div className="place rating">&#x2B50;4.3</div></div>
                   <div className="place location">{place.location}</div>
                   <div className="place tags">{place.placetags.map((tag, index) => {
                                return <span key={index}>{tag}, </span>
                            })}</div>
                    <div className="place price">{place.price}</div>
                </div>
                </div>            
             );
        })}
         </div>
        
    </div>
  )
};

export default FilterResults;
