// BookingForm.jsx
import React, { useState } from "react";

const BookingForm = () => {
  const [rateType, setRateType] = useState("hourly");
  const [formData, setFormData] = useState({
    pickupAddress: "",
    dropoffAddress: "",
    oneWay: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
  });

  const handleRateTypeChange = (type) => {
    setRateType(type);
    setFormData({
      ...formData,
      pickupDate: "",
      pickupTime: "",
      returnDate: "",
      returnTime: "",
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="booking-form">
      <div className="rental-type">
        <button
          className={`type-button ${rateType === "hourly" ? "active" : ""}`}
          onClick={() => handleRateTypeChange("hourly")}
        >
          Hourly
        </button>
        <button
          className={`type-button ${rateType === "full" ? "active" : ""}`}
          onClick={() => handleRateTypeChange("full")}
        >
          Full Rate
        </button>
      </div>

      <div className="form-container">
        <div className="form-group">
          <input
            type="text"
            name="pickupAddress"
            value={formData.pickupAddress}
            onChange={handleInputChange}
            placeholder="Pick-up Address"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="dropoffAddress"
            value={formData.dropoffAddress}
            onChange={handleInputChange}
            placeholder="Drop-off Address"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="oneWay"
            value={formData.oneWay}
            onChange={handleInputChange}
            placeholder="One Way"
            className="form-control"
          />
        </div>

        <div className="date-time-group">
          <div className="form-group">
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </div>

        {/* {rateType === "full" && (
          <div className="date-time-group">
            <div className="form-group">
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <input
                type="time"
                name="returnTime"
                value={formData.returnTime}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
        )} */}

        <button className="reserve-button">Reserve Now</button>
      </div>

      <style>
        {`
          .booking-form {
            width: 100%;
            max-width: 500px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 24px;
            margin: 0 auto;
          }

          .rental-type {
            display: flex;
            gap: 12px;
            margin-bottom: 24px;
          }

          .type-button {
            padding: 10px 24px;
            border-radius: 25px;
            border: none;
            background-color: #f3f4f6;
            color: #4b5563;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .type-button:hover {
            background-color: #e5e7eb;
          }

          .type-button.active {
            background-color: #14b8a6;
            color: white;
          }

          .form-container {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .form-group {
            width: 100%;
          }

          .form-control {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            font-size: 14px;
            transition: all 0.3s ease;
          }

          .form-control:focus {
            outline: none;
            border-color: #14b8a6;
            box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1);
          }

          .date-time-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .reserve-button {
            width: 100%;
            padding: 12px;
            background-color: #14b8a6;
            color: white;
            border: none;
            border-radius: 6px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 8px;
          }

          .reserve-button:hover {
            background-color: #0d9488;
          }

          /* Responsive styles */
          @media (max-width: 480px) {
            .booking-form {
              padding: 16px;
            }

            .date-time-group {
              grid-template-columns: 1fr;
            }

            .rental-type {
              flex-direction: column;
            }

            .type-button {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BookingForm;
