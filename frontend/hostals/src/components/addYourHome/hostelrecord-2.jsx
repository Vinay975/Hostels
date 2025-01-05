import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addurhomeCSS/hostelRecordformtwo.css";

const HostelRecordFormTwo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    meals: Array(7).fill({ tiffin: "", lunch: "", snacks: "", dinner: "" }),
    photos: {
      main: null,
      messRoom: null,
      topView: null,
      washroom: null,
    },
    securityDescription: "",
    wifi: "yes",
    rent: {
      OneSharing: "",
      TwoSharing: "",
      ThreeSharing: "",
      FourSharing: "",
      FiveSharing: "",
      Advance: "",
    },
  });

  const handleInputChange = (field, value, dayIndex = null, mealType = null) => {
    if (field === "meals") {
      const updatedMeals = [...formData.meals];
      updatedMeals[dayIndex] = { ...updatedMeals[dayIndex], [mealType]: value };
      setFormData((prev) => ({ ...prev, meals: updatedMeals }));
    } else if (field === "photos") {
      setFormData((prev) => ({ ...prev, photos: { ...prev.photos, ...value } }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const isFormValid = () => {
    const { meals, photos, securityDescription, rent } = formData;
    const mealsFilled = meals.every((meal) =>
      Object.values(meal).every((value) => value.trim() !== "")
    );
    const photosUploaded = Object.values(photos).every((photo) => photo !== null);
    const rentFilled = Object.values(rent).every((value) => value.trim() !== "");
    const descriptionFilled = securityDescription.trim() !== "";
    return mealsFilled && photosUploaded && rentFilled && descriptionFilled;
  };

  return (
    <div className="form-2-hostel-form-container">
      <fieldset className="form-2-hostel-form-fieldset">
        <legend className="form-2-hostel-form-legend">Hostel Information</legend>

        {/* Meal Schedule */}
        <div className="form-2-meal-schedule">
          <h3 className="form-2-form-section-title">Meal Schedule</h3>
          <table className="form-2-meal-schedule-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Tiffin</th>
                <th>Lunch</th>
                <th>Snacks</th>
                <th>Dinner</th>
              </tr>
            </thead>
            <tbody>
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
                <tr key={index}>
                  <td>{day}</td>
                  {["tiffin", "lunch", "snacks", "dinner"].map((mealType) => (
                    <td key={mealType}>
                      <input
                        type="text"
                        placeholder={mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                        value={formData.meals[index][mealType]}
                        onChange={(e) =>
                          handleInputChange("meals", e.target.value, index, mealType)
                        }
                        className="form-2-meal-input"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Photo Upload Section */}
        <div className="form-2-photo-upload">
          <h3 className="form-2-form-section-title">Upload Photos</h3>
          <div className="form-2-photo-upload-grid">
            {["main", "messRoom", "topView", "washroom"].map((photoType) => (
              <div className="form-2-photo-upload-item" key={photoType}>
                <label className="form-2-photo-label">
                  {photoType.charAt(0).toUpperCase() + photoType.slice(1)}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleInputChange("photos", { [photoType]: e.target.files[0] })
                  }
                  className="form-2-photo-input"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Security and Rent */}
        <div className="form-2-security-rent-container">
          <textarea
            placeholder="Describe security measures..."
            value={formData.securityDescription}
            onChange={(e) => handleInputChange("securityDescription", e.target.value)}
            className="form-2-security-description"
          ></textarea>
          <div className="form-2-wifi-selection">
            <label>WiFi Availability:</label>
            <select
              value={formData.wifi}
              onChange={(e) => handleInputChange("wifi", e.target.value)}
              className="form-2-wifi-select"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        {/* Rent Details */}
        <div className="form-2-rent-details">
          <h3 className="form-2-form-section-title">Rent Information</h3>
          <div className="form-2-rent-grid">
            {Object.keys(formData.rent).map((key) => (
              <div className="form-2-rent-item" key={key}>
                <label>{key.replace("Sharing", " Sharing")}</label>
                <input
                  type="number"
                  placeholder="Enter Amount"
                  value={formData.rent[key]}
                  onChange={(e) =>
                    handleInputChange("rent", { ...formData.rent, [key]: e.target.value })
                  }
                  className="form-2-rent-input"
                />
              </div>
            ))}
          </div>
        </div>
      </fieldset>

      <div className="form-2-form-actions">
        <button
          onClick={() => navigate(-1)}
          className="form-2-back-button"
        >
          <span style={{ fontSize: "1.2em" }}>←</span>
          <span>Back</span>
        </button>
        <button
          onClick={() => navigate("/final-submit")}
          disabled={!isFormValid()}
          className="form-2-submit-button"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default HostelRecordFormTwo;
