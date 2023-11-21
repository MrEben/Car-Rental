import React from "react";
import HeaderImg from "../../assets/carweb.png";
import { AiFillCar } from "react-icons/ai";
import "./header.css";
const Header = () => {
  const subscribe = (e) => {
    e.target.reset();
  };
  return (
    <>
      <div className="header-ui">
        <div className="heading">
          <h2>
            We have <span>nice</span> cars for rent
          </h2>
          <h1>
            Helping you <span>search, rent and book</span> vehicles easily.
            Whenever, wherever
          </h1>
        </div>
        <div className="header-image">
          <img src={HeaderImg} alt="no image here" />
        </div>
        <div className="background-cover"></div>
      </div>
      <div className="search-ui">
        <div className="label">
          <AiFillCar />
          Cars
        </div>
        <form onClick={subscribe}>
          <input
            className="user-location"
            type="text"
            name="address"
            placeholder="Enter your address"
            required
          />
          <input className="search-btn btn" type="submit" value="Search" />
        </form>
        <button className="map-choose btn">Choose on map</button>
      </div>
    </>
  );
};

export default Header;
