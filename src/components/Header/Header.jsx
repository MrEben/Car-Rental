import React from "react";
import Cars from "../cars/Cars";
import "./header.css";
import { AiFillGoogleCircle, AiOutlineGoogle } from "react-icons/ai";

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
              <button className="btn log-in-btn">login</button>
              <button className="btn">Sign up</button>
            </div>
          </div>
          <form action="">
            <h1>Login</h1>
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
            <button type="submit" className="btn">
              Login
            </button>
            <button type="submit" className="btn google-sign-in">
              <AiOutlineGoogle /> Sign in with Google
            </button>
            <div className="register-link">
              <p>
                Dont have an account? <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </header>
      <Cars />
    </>
  );
};
export default Header;
