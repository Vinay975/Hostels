import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../addYourHome/addurhomeCSS/apartment.css";

const FlatApartment = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        ownerName: "",
        contactNumber: "",
        secondContactNumber: "",
        email: "",
        apartmentName: "",
        location: "",
        numberOfFloors: "",
        numberOfRooms: "",
        profilePhoto: null,
        bhkSizes: [], // New field for BHK sizes
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            profilePhoto: e.target.files[0],
        }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => {
            const updatedSizes = checked
                ? [...prevData.bhkSizes, value]
                : prevData.bhkSizes.filter((size) => size !== value);
            return { ...prevData, bhkSizes: updatedSizes };
        });
    };

    const isFormValid = () => {
        const {
            ownerName,
            contactNumber,
            email,
            apartmentName,
            location,
            numberOfFloors,
            numberOfRooms,
            profilePhoto,
            bhkSizes,
        } = formData;

        return (
            ownerName &&
            contactNumber &&
            email &&
            apartmentName &&
            location &&
            numberOfFloors &&
            numberOfRooms &&
            profilePhoto &&
            bhkSizes.length > 0 // Ensure at least one BHK size is selected
        );
    };

    return (
        <div className="apartment-record-form">
            <h2 className="apartment-record-title">Apartment Record Form</h2>
            <div className="apartment-record-row">
                <div className="apartment-record-box">
                    <fieldset className="apartment-record-fieldset">
                        <legend className="apartment-record-legend">Owner Details</legend>
                        <input
                            type="text"
                            name="ownerName"
                            placeholder="Owner Name"
                            className="apartment-record-input"
                            value={formData.ownerName}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="contactNumber"
                            placeholder="Contact Number"
                            className="apartment-record-input"
                            value={formData.contactNumber}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="secondContactNumber"
                            placeholder="Second Contact Number"
                            className="apartment-record-input"
                            value={formData.secondContactNumber}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="apartment-record-input"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <div className="apartment-record-file-container">
                            <label
                                htmlFor="profile-photo"
                                className="apartment-record-file-label"
                            >
                                Choose Profile Photo
                            </label>
                            <input
                                type="file"
                                id="profile-photo"
                                className="apartment-record-file-input"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                    </fieldset>
                </div>

                <div className="apartment-record-box">
                    <fieldset className="apartment-record-fieldset">
                        <legend className="apartment-record-legend">Apartment Details</legend>
                        <input
                            type="text"
                            name="apartmentName"
                            placeholder="Apartment Name"
                            className="apartment-record-input"
                            value={formData.apartmentName}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            className="apartment-record-input"
                            value={formData.location}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="numberOfFloors"
                            placeholder="Number of Floors"
                            className="apartment-record-input"
                            value={formData.numberOfFloors}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="numberOfRooms"
                            placeholder="Number of Rooms"
                            className="apartment-record-input"
                            value={formData.numberOfRooms}
                            onChange={handleInputChange}
                        />
                        <div className="apartment-record-checkbox-container">
                            <label className="apartment-record-checkbox-label">Select BHK Sizes:</label>
                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="1BHK"
                                        checked={formData.bhkSizes.includes("1BHK")}
                                        onChange={handleCheckboxChange}
                                    />
                                    1BHK
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="2BHK"
                                        checked={formData.bhkSizes.includes("2BHK")}
                                        onChange={handleCheckboxChange}
                                    />
                                    2BHK
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="3BHK"
                                        checked={formData.bhkSizes.includes("3BHK")}
                                        onChange={handleCheckboxChange}
                                    />
                                    3BHK
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="4BHK"
                                        checked={formData.bhkSizes.includes("4BHK")}
                                        onChange={handleCheckboxChange}
                                    />
                                    4BHK
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className="apartment-record-buttons">
                <button
                    className="apartment-back-button"
                    onClick={() => navigate(-1)}
                >
                    <span className="arrow">←</span>
                    <span>Back</span>
                </button>
                <button
                    className="apartment-next-button"
                    onClick={() => navigate("/apartment-details")}
                    disabled={!isFormValid()}
                >
                    <span>Next</span>
                    <span className="arrow">→</span>
                </button>
            </div>
        </div>
    );
};

export default FlatApartment;
