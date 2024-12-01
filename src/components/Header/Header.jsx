import React, { useState } from "react";
import Cars from "../cars/Cars";
import "./header.css";
import { AiOutlineGoogle, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [formData, setFormData] = useState({
    pickupAddress: "",
    dropoffAddress: "",
    oneWay: "",
    pickupDate: "",
    pickupTime: "",
  });
  return (
    <>
      {/* <header>
        <div className="background"></div>
        <div className="wrapper">
          <div className="left">
            <h1>Do you need a vehicle to rent?</h1>
            <h3>
              Check out our fleet of vehicles. We have nice cars available which
              would suit your every need.Look no where else for cars to rent.
              Discounts available
            </h3>
            <div className="buttons">
              <Link to="/login">
                <button className="log-in-btn btn">Login</button>
              </Link>
              <Link to="/signup">
                <button className="btn">Sign Up</button>
              </Link>
            </div>
          </div>
          <LoginUI />
          <SignUpUI />
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Do you need a vehicle to rent?</h1>
              <p>
                Check out our fleet of vehicles. We have nice cars available
                which would suit your every need. Look no where else for cars to
                rent. Discounts available
              </p>
            </div>
            {/* Booking form */}
            <div className="booking-form">
              <div className="rental-type">
                <button className="type-button active">Hourly</button>
                <button className="type-button">Full Rate</button>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pick-up Address"
                  value={formData.pickupAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, pickupAddress: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Drop-off Address"
                  value={formData.dropoffAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, dropoffAddress: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="One Way"
                  value={formData.oneWay}
                  onChange={(e) =>
                    setFormData({ ...formData, oneWay: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control"
                  value={formData.pickupDate}
                  onChange={(e) =>
                    setFormData({ ...formData, pickupDate: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="time"
                  className="form-control"
                  value={formData.pickupTime}
                  onChange={(e) =>
                    setFormData({ ...formData, pickupTime: e.target.value })
                  }
                />
              </div>
              <button className="reserve-button">Reserve Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* if login is true. this div come in to provide a top margin */}
      {/* <div style={{ height: "5rem" }}></div> */}
      <Cars />
      {/* CTA */}
      <div className="save-big">
        <h1>Save big with our affordable car rental!</h1>
        <h2>
          Top Brands. Local Suppliers. <span>24/7</span> Support
        </h2>
      </div>
    </>
  );
};
export default Header;
export const LoginUI = () => {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <div className="form-options">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit">Log in</button>
        <button className="google-login">
          <span>Log in with Google</span>
        </button>
      </form>
    </div>
  );
};
export const SignUpUI = () => {
  return (
    <>
      <form className="sign-up" action="">
        <h1>Sign Up</h1>

        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
        </div>
        <button type="submit" className="log-in-btn btn">
          Sign Up
        </button>
        {/* This button handles google signup */}
        <button type="button" className="btn google-sign-in">
          <AiOutlineGoogle /> Sign up with Google
        </button>
        <div className="register-link">
          <p>
            Have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </>
  );
};
