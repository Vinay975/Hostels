import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../addYourHome/addurhomeCSS/to-lets.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ToletForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      ownerName: "",
      phone: "",
      secondPhone: "",
      email: "",
      ownerPhoto: null,
      toletOwnerName: "",
      location: "",
      floors: "",
      rooms: "",
      rent: "",
      advance: "",
      roomPhotos: []
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handlePhotoChange = (e, type) => {
      if (type === "owner") {
        setFormData({ ...formData, ownerPhoto: e.target.files[0] });
      } else {
        setFormData({ ...formData, roomPhotos: [...e.target.files] });
      }
    };
  
    return (
      <div className="tolet-form-container">
        <h1 className="form-title">To-Let Form</h1>
        <div className="form-sections">
          {/* Owner Details */}
          <div className="form-section owner-details">
            <h2>Owner Details</h2>
            <input type="text" name="ownerName" placeholder="Owner Name" onChange={handleChange} />
            <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
            <input type="text" name="secondPhone" placeholder="Second Contact Number" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
            <label className="file-label">Upload Owner Photo:</label>
            <input type="file" className="file-input" onChange={(e) => handlePhotoChange(e, "owner")} />
          </div>
  
          {/* To-Let Details */}
          <div className="form-section tolet-details">
            <h2>To-Let Details</h2>
            <input type="text" name="toletOwnerName" placeholder="Owner Name" onChange={handleChange} />
            <input type="text" name="location" placeholder="Location" onChange={handleChange} />
            <input type="number" name="floors" placeholder="No. of Floors" onChange={handleChange} />
            <input type="number" name="rooms" placeholder="No. of Rooms" onChange={handleChange} />
            <input type="number" name="rent" placeholder="Monthly Rent" onChange={handleChange} />
            <input type="number" name="advance" placeholder="Advance Payment" onChange={handleChange} />
            <label className="file-label">Upload Room Photos (Max 5):</label>
            <input type="file" multiple className="file-input" onChange={(e) => handlePhotoChange(e, "room")} />
          </div>
        </div>
  
        {/* Buttons */}
        <div className="form-buttons">
          <button className="back-button" onClick={() => navigate(-1)}>
            <FaArrowLeft className="arrow" /> Back
          </button>
          <button className="next-button" onClick={() => navigate("/final-submit")}> 
            Submit <FaArrowRight className="arrow" />
          </button>
        </div>
      </div>
    );
  };
  
  export default ToletForm;
  