import React, { useState } from "react";
import Cars from "../cars/Cars";
import "./header.css";
import { AiOutlineGoogle, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
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
      </header>
      {/* if login is true. this div come in to provide a top margin */}
      {/* <div style={{ height: "5rem" }}></div> */}
      <Cars />
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
    <form className="login" action="">
      <h1>Login</h1>
      <AiOutlineClose className="close-btn" />
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
        <a href="#">Forgot Password</a>
      </div>
      <button type="submit" className="log-in-btn btn">
        Log in
      </button>
      {/* This button handles google login */}
      <button type="button" className="btn google-sign-in">
        <AiOutlineGoogle /> Log in with Google
      </button>
      <div className="register-link">
        <p>
          Dont have an account? <Link to="/signup">Register</Link>
        </p>
      </div>
    </form>
  );
};
export const SignUpUI = () => {
  return (
    <>
      <form className="sign-up" action="">
        <h1>Sign Up</h1>
        <AiOutlineClose className="close-btn" />
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
          <a href="#">Forgot Password</a>
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
