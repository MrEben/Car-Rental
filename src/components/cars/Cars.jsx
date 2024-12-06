import React, { useState, useEffect } from "react";
import Img from "../../assets/nissan-offer.png";
import "./index.css";
import { Link } from "react-router-dom";
import { cars } from "../data";

const Cars = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");

  const carBrands = ["All", "Toyota", "Audi", "Honda", "Nissan", "Mazda"];

  // const cars = [
  //   {
  //     id: 1,
  //     name: "Mercedes C-Class",
  //     brand: "Mercedes",
  //     rating: 4.5,
  //     features: ["Automatic", "Diesel", "100km/H", "Black"],
  //     price: 500,
  //     image: Img,
  //   },
  //   {
  //     id: 2,
  //     name: "Nissan Maxima",
  //     brand: "Nissan",
  //     rating: 4.8,
  //     features: ["Manual", "Petrol", "100km/H", "Black"],
  //     price: 1000,
  //     image: Img,
  //   },
  //   {
  //     id: 3,
  //     name: "Toyota Camry",
  //     brand: "Toyota",
  //     rating: 4.6,
  //     features: ["Automatic", "Petrol", "200km/H", "Red"],
  //     price: 200,
  //     image: Img,
  //   },
  // ];
  return (
    <>
      {/* Car Listing Section */}
      <section className="cars-section" id="cars">
        <h2>Explore our Vehicles</h2>

        <div className="brand-filter">
          {carBrands.map((brand) => (
            <button
              key={brand}
              className={`brand-button ${
                selectedBrand === brand ? "active" : ""
              }`}
              onClick={() => setSelectedBrand(brand)}
            >
              {brand}
            </button>
          ))}
        </div>

        <div className="car-grid">
          {cars.map((car) => (
            <div key={car.id} className="car-card">
              <Link to={`/cars/${car.id}`}>
                <img src={car.image} alt={car.name} />
                <div className="car-details-page">
                  <h3>{car.name}</h3>
                  <h5>{car.company}</h5>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < Math.floor(car.rating) ? "star filled" : "star"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="features">
                    {car.features.map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="car-footer">
                    <span className="price">GHC{car.price}/day</span>
                    <button className="rent-button">Rent now</button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <button className="show-more">Show more</button>
      </section>
    </>
  );
};

export default Cars;
