import React, { useState, useEffect } from "react";
import { FaHeart, FaShare } from "react-icons/fa";
import Img from "../assets/mercedes-offer.png";
import Img1 from "../assets/bmw-offer.png";
import { Link } from "react-router-dom";
import { cars } from "../components/data";
import { useParams } from "react-router-dom";

const CarRentalPage = () => {
  const { id } = useParams();
  const [selectedCarDetails, setselectedCarDetails] = useState([]);
  useEffect(() => {
    const newCar = cars.find((item) => item.id == id);
    setselectedCarDetails(newCar);
  }, [id]);

  return (
    <div className="car-details-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <ol className="breadcrumb-list">
          <li>
            <a href="#" className="breadcrumb-link">
              Home
            </a>
          </li>
          <li className="breadcrumb-separator">&gt;</li>
          <li>
            <a href="#" className="breadcrumb-link">
              Cars
            </a>
          </li>
          <li className="breadcrumb-separator">&gt;</li>
          <li className="breadcrumb-current">{selectedCarDetails.name}</li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="main-grid">
        {/* Left Column - Car Image */}
        <div className="car-image-container">
          <img src={Img} alt="Mercedes Benz" className="car-image" />
        </div>

        {/* Right Column - Details */}
        <div className="card">
          <div className="card-content">
            <div className="dealer-header">
              <div>
                <h2 className="section-title">Listed by</h2>
                <div className="dealer-info">
                  <span className="dealer-name">Rana Motors</span>
                  <span className="dealer-rating">4.5 ratings</span>
                </div>
              </div>
              <div className="action-buttons">
                <button className="icon-button">
                  <FaShare className="icon" />
                </button>
                <button className="icon-button">
                  <FaHeart className="icon" />
                </button>
              </div>
            </div>

            <div className="details-section">
              <div>
                <h3 className="details-title">Location</h3>
                <p className="details-text">
                  Marina Center, New Mako foods Arena, Accra
                </p>
              </div>

              <div>
                <h3 className="details-title">Supported Payment methods</h3>
                <ul className="payment-list">
                  <li>• Visa Card</li>
                  <li>• Mobile money(MTN, Vodafone)</li>
                </ul>
              </div>
            </div>

            <button className="book-button">Book Now</button>

            <a href="#" className="explore-link">
              Explore all 40 cars of Rana Motors
            </a>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="card specs-card">
        <div className="card-content">
          <h2 className="section-title">Specifications</h2>
          {/* work  on this to acheive proper display */}
          <p className="specs-text">{selectedCarDetails.features}</p>
        </div>
      </div>

      {/* Booking Process */}
      <section className="booking-process">
        <h2 className="process-title">Step by Step Process to Book a Car</h2>
        <div className="steps-grid">
          {[
            {
              title: "Choose a car",
              description:
                "We have a wide range of vehicles that would suit your desire",
            },
            {
              title: "Make reservation",
              description:
                "Our dealers are ready to assist you reserve the best choice for you",
            },
            {
              title: "Let's drive",
              description:
                "Check back later to see if reservation is approved. Enjoy your ride!",
            },
          ].map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-image-container">
                <img
                  src={Img1}
                  alt={`Step ${index + 1}`}
                  className="step-image"
                />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CarRentalPage;
