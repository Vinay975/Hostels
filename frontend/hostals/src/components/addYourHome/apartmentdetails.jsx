import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../addYourHome/addurhomeCSS/aprtmentsdetails.css";

const ApartmentDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    photos: Array(7).fill(null),
    furnishing: "",
    policy: "",
    security: "",
    rent: { '1BHK': "", '2BHK': "", '3BHK': "", '4BHK': "" },
    rentToPay: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name in formData.rent) {
      // Update the rent field if the name corresponds to a rent type (1BHK, 2BHK, etc.)
      setFormData((prevData) => ({
        ...prevData,
        rent: {
          ...prevData.rent,
          [name]: value,
        },
      }));
    } else {
      // For other fields (like furnishing, policy, etc.)
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e, index) => {
    const files = [...formData.photos];
    files[index] = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photos: files,
    }));
  };

  const handleSubmit = () => {
    if (Object.values(formData).every((field) => field !== "" && field !== null)) {
      setIsFormValid(true);
      navigate("/final-submit");
    }
  };

  // Validation to enable Next button
  useEffect(() => {
    const isValidRent = Object.values(formData.rent).every((value) => value !== "");
    const isValidRentToPay = formData.rentToPay !== "";
    setIsFormValid(isValidRent && isValidRentToPay);
  }, [formData]);

  return (
    <div className="apartment-details-container">
      <h1 className="apartment-details-title">Apartment Details</h1>

      <div className="apartment-details-photos">
        <h2>Upload Photos</h2>
        {["Building", "Living Room", "Kitchen", "Bedroom", "Bathroom", "Balcony or View", "Additional Space"].map((photoName, index) => (
          <div key={index} className="apartment-details-photo-upload">
            <label htmlFor={`file-input-${index}`} className="apartment-details-photo-label">
              {photoName}
            </label>
            <input
              type="file"
              accept="image/*"
              id={`file-input-${index}`}
              onChange={(e) => handleFileChange(e, index)}
              className="apartment-details-file-input"
            />
          </div>
        ))}
      </div>

      <div className="apartment-details-furnishing">
        <h3>Furnishing</h3>
        <select
          className="apartment-details-furnishing-select"
          name="furnishing"
          value={formData.furnishing}
          onChange={handleChange}
        >
          <option value="">Select Furnishing Type</option>
          <option value="Semi-Furnished">Semi-Furnished</option>
          <option value="Furnished">Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>
      </div>

      <div className="apartment-details-policy">
        <h3>Privacy Policy</h3>
        <textarea
          className="apartment-details-textarea"
          name="policy"
          value={formData.policy}
          onChange={handleChange}
          placeholder="Enter privacy policy details"
        />
      </div>

      <div className="apartment-details-security">
        <h3>Security Details</h3>
        <textarea
          className="apartment-details-textarea"
          name="security"
          value={formData.security}
          onChange={handleChange}
          placeholder="Enter security details"
        />
      </div>

      <div className="apartment-details-rent">
        <h3>Rent Details</h3>
        <div className="apartment-details-rent-inputs">
          {['1BHK', '2BHK', '3BHK', '4BHK'].map((bhk) => (
            <input
              key={bhk}
              type="number"
              className="apartment-details-input"
              name={bhk}  // Here we are using the BHK type as the name
              value={formData.rent[bhk]}
              onChange={handleChange}
              placeholder={`Rent for ${bhk}`}
            />
          ))}
        </div>
      </div>

      <div className="apartment-details-rent-to-pay">
        <h3>Rent to Pay</h3>
        <input
          type="number"
          className="apartment-details-input"
          name="rentToPay"
          value={formData.rentToPay}
          onChange={handleChange}
          placeholder="Enter Rent to Pay"
        />
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
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          <span>Next</span>
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default ApartmentDetails;
