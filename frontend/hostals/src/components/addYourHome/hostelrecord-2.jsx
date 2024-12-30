import React from "react";
import { useNavigate } from "react-router-dom";

const HostelRecordFormTwo = () => {

    const navigate = useNavigate();
    return (
        <>
            <h1>Hello from -2</h1>
            <button className="hostel-2-back-button" onClick={() => navigate(-1)}>
                Back
            </button>
            <button className="hostel-2-submit-button" onClick={() => {
                navigate("/final-submit");
            }}>
                submit
            </button>
        </>
    );
}

export default HostelRecordFormTwo