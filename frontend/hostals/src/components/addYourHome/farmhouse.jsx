import React from "react";
import { useNavigate } from "react-router-dom";

const FarmHouse = () => {

    const navigate = useNavigate();
    return(
        <>
        <h1>Hloo this is Farmhouse Page</h1>
        <button className="flat-apartment-back-button" onClick={() => navigate(-1)}>
                    Back
                </button>
        <button onClick={() => {
            navigate("/final-submit")
        }}> next</button>
        </>
    );
}

export default FarmHouse;