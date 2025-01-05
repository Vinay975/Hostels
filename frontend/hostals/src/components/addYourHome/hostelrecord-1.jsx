import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addurhomeCSS/hostelRecordformone.css";

const HostelRecordFormOne = () => {
    const navigate = useNavigate();

    // State to track form input values
    const [formData, setFormData] = useState({
        ownerName: "",
        contactNumber: "",
        secondContactNumber: "",
        email: "",
        hostelName: "",
        location: "",
        numberOfFloors: "",
        numberOfRooms: "",
        gender: "",
        profilePhoto: null,
        sharing: [],
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle file input changes
    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            profilePhoto: e.target.files[0],
        }));
    };

    // Handle checkbox changes
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => {
            const newSharing = checked
                ? [...prevData.sharing, value]
                : prevData.sharing.filter((item) => item !== value);
            return { ...prevData, sharing: newSharing };
        });
    };

    // Check if all required fields are filled
    const isFormValid = () => {
        const {
            ownerName,
            contactNumber,
            email,
            hostelName,
            location,
            numberOfFloors,
            numberOfRooms,
            gender,
            profilePhoto,
        } = formData;

        return (
            ownerName &&
            contactNumber &&
            email &&
            hostelName &&
            location &&
            numberOfFloors &&
            numberOfRooms &&
            gender &&
            profilePhoto
        );
    };

    return (
        <div className="hostel-record-form">
            <h2 className="hostel-record-title">Hostel Record Form</h2>
            <div className="hostel-record-row">
                <div className="hostel-record-box">
                    <fieldset className="hostel-record-fieldset">
                        <legend className="hostel-record-legend">Owner Details</legend>
                        <input
                            type="text"
                            name="ownerName"
                            placeholder="Owner Name"
                            className="hostel-record-input"
                            value={formData.ownerName}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="contactNumber"
                            placeholder="Contact Number"
                            className="hostel-record-input"
                            value={formData.contactNumber}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="secondContactNumber"
                            placeholder="Second Contact Number"
                            className="hostel-record-input"
                            value={formData.secondContactNumber}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="hostel-record-input"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <div className="hostel-record-file-container">
                            <label
                                htmlFor="profile-photo"
                                className="hostel-record-file-label"
                            >
                                Choose Profile Photo
                            </label>
                            <input
                                type="file"
                                id="profile-photo"
                                className="hostel-record-file-input"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                    </fieldset>
                </div>

                <div className="hostel-record-box">
                    <fieldset className="hostel-record-fieldset">
                        <legend className="hostel-record-legend">Hostel Details</legend>
                        <input
                            type="text"
                            name="hostelName"
                            placeholder="Hostel Name"
                            className="hostel-record-input"
                            value={formData.hostelName}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            className="hostel-record-input"
                            value={formData.location}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="numberOfFloors"
                            placeholder="Number of Floors"
                            className="hostel-record-input"
                            value={formData.numberOfFloors}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="numberOfRooms"
                            placeholder="Number of Rooms"
                            className="hostel-record-input"
                            value={formData.numberOfRooms}
                            onChange={handleInputChange}
                        />

                        <label
                            htmlFor="gender-select"
                            className="hostel-record-label"
                        >
                            Gender:
                        </label>
                        <select
                            id="gender-select"
                            name="gender"
                            className="hostel-record-select"
                            value={formData.gender}
                            onChange={handleInputChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        <div className="hostel-record-sharing">
                            <label className="hostel-record-label">Sharing Options:</label>
                            <div className="hostel-record-checkbox-group">
                                {["1", "2", "3", "4", "5"].map((value) => (
                                    <label key={value}>
                                        <input
                                            type="checkbox"
                                            value={value}
                                            checked={formData.sharing.includes(value)}
                                            onChange={handleCheckboxChange}
                                        />{" "}
                                        {value} Sharing
                                    </label>
                                ))}
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>

            <div className="hostel-record-buttons">
                <button
                    className="hostel-record-back-button"
                    onClick={() => navigate(-1)}
                >
                    &#8592; Back
                </button>
                <button
                    className="hostel-record-submit-button"
                    disabled={!isFormValid()} // Disable button until all fields are valid
                    onClick={() => navigate("/hostel-details")}
                >
                    Submit &#8594;
                </button>
            </div>
        </div>
    );
};

export default HostelRecordFormOne;
