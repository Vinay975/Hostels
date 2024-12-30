import React from "react";
import { useNavigate } from "react-router-dom";
// import "./addurhomeCSS/hostelRecordformone.css"

const HostelRecordFormOne = () => {
    const navigate = useNavigate();

    return (
        <>
            <h2>Hostel Record Form</h2>
            {/* First row: two side-by-side boxes */}
            <div className="HostelRecord-first-row">
                <div className="HostelRecord-form-box">
                    <fieldset>
                        <legend>Owner Details</legend>
                        <input type="text" placeholder="Owner Name" />
                        <input type="number" placeholder="Contact Number" />
                        <input type="number" placeholder="Second Contact Number" />
                        <input type="email" placeholder="Email Address" />
                        <div className="file-input-container">
                            <label htmlFor="profile-photo" className="file-placeholder">Choose Profile Photo</label>
                            <input type="file" id="profile-photo" className="file-input" accept="image/*" />
                        </div>
                    </fieldset>
                </div>

                <div className="HostelRecord-form-box">
                    <fieldset>
                        <legend>Hostel Details</legend>
                        <input type="text" placeholder="Hostel Name" />
                        <input type="text" placeholder="Location" />
                        <input type="number" placeholder="Number of Floors" />
                        <input type="number" placeholder="Number of Rooms" />

                        {/* Gender selection dropdown */}
                        <label htmlFor="gender-select">Gender:</label>
                        <select id="gender-select" name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        {/* Sharing options as checkboxes */}
                        <div className="sharing-options">
                            <label>Sharing Options:</label>
                            <div className="checkbox-group">
                                <label>
                                    <input type="checkbox" name="sharing" value="1" /> 1 Sharing
                                </label>
                                <label>
                                    <input type="checkbox" name="sharing" value="2" /> 2 Sharing
                                </label>
                                <label>
                                    <input type="checkbox" name="sharing" value="3" /> 3 Sharing
                                </label>
                                <label>
                                    <input type="checkbox" name="sharing" value="4" /> 4 Sharing
                                </label>
                                <label>
                                    <input type="checkbox" name="sharing" value="5" /> 5 Sharing
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div>
                <button className="hostel-1-back-button" onClick={() => navigate(-1)}>
                    Back
                </button>
                <button className="hostel-1-submit-button" onClick={() => {
                    navigate("/hostel-details");
                }}>
                    submit
                </button>
            </div>
        </>
    );
}

export default HostelRecordFormOne