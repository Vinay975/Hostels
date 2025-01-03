import React from "react";
import { useNavigate } from "react-router-dom";

const ToletForm = () => {

    const navigate = useNavigate();
    return(
        <>
        <h1>Hloo this is To-lets page</h1>
        <button className="flat-apartment-back-button" onClick={() => navigate(-1)}>
                    Back
                </button>
        <button onClick={() => {
            navigate("/tolets-final-submit")
        }}> next</button>
        </>
    );
}

export default ToletForm;