import React from "react";
import { useNavigate } from "react-router-dom";

const FinalSubmit = () => {

    const navigate = useNavigate();
    return(
        <>
        <h1>Hello this is final sumnit</h1>
        <button className="final-back-button" onClick={() => navigate(-1)}>
                    Back
                </button>
        <button onClick={()=> {navigate("/")}}>Submit</button>
        </>
    )
}

export default FinalSubmit