import React from "react";
import { useNavigate } from "react-router-dom";

const FlatApartment = () => {

    const navigate = useNavigate();
    return(
        <>
        <h1>Hloo this is Apartment page</h1>
        <button className="flat-apartment-back-button" onClick={() => navigate(-1)}>
                    Back
                </button>
        <button onClick={() => {
            navigate("/fartapartment-final-submit")
        }}> next</button>
        </>
    );
}

export default FlatApartment;