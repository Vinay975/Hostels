import React from "react";
import { useNavigate } from "react-router-dom";
// import '../public/styles/describleplace.css';

const DescriblePlace = () => {
    const navigate = useNavigate();

    const places = [
        { label: "Hostel", image: "house-icon.png", path: "/hostel" },
        { label: "Flat/Apartment", image: "apartment-icon.png", path: "/flat-apartment" },
        { label: "To-lets", image: "barn-icon.png", path: "/to-lets" },
        { label: "Reading Rooms", image: "bed-breakfast-icon.png", path: "/reading-rooms" },
        { label: "Hotels", image: "boat-icon.png", path: "/hotels" },
        { label: "FarmHouse", image: "cabin-icon.png", path: "/farmhouse" },
    ];

    // Navigate to the respective page with data
    const handleBoxClick = (place) => {
        navigate(place.path, { state: { place: place.label } });
    };

    return (
        <>
            <div className="describeplace-container">
                <h1>Which of these best describes your place?</h1>
                <div className="box-grid">
                    {places.map((place, index) => (
                        <div
                            key={index}
                            className="box"
                            onClick={() => handleBoxClick(place)}
                        >
                            <img src={place.image} alt={place.label} className="box-icon" />
                            <span>{place.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="describle-button">
                <button className="describle-back-button" onClick={() => navigate(-1)}>
                    Back
                </button>
            </div>
        </>
    );
};

export default DescriblePlace;
