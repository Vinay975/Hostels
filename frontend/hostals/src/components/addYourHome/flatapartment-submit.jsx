import React from "react";
import { useNavigate } from "react-router-dom";

const FlatApartmentSubmit = () => {

    const navigate = useNavigate();
    return (
        <>
            <h1>Final submit just say thanks to babe</h1>
            <h1>Hello from -2</h1>
            <button className="hostel-1-back-button" onClick={() => navigate(-1)}>
                Back
            </button>
            <button className="hostel-1-submit-button" onClick={() => {
                navigate("/");
            }}>
                submit
            </button>
        </>
    );
}

export default FlatApartmentSubmit;