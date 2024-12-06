import React, { useState } from "react";
import Cars from "../cars/Cars";
import "./header.css";
import Blogs from "../../pages/Blogs";
import BookingForm from "./BookingForm";
import { AiOutlineGoogle, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="header">
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
            <BookingForm />
          </div>
        </div>
      </section>
      {/* CARS GALLERY */}
      <Cars />
      {/* BLOGS DISPLAY */}
      <Blogs />
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
// export const LoginUI = () => {
//   return (
//     <div className="login-form">
//       <h2>Login</h2>
//       <form>
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <div className="form-options">
//           <label>
//             <input type="checkbox" />
//             Remember Me
//           </label>
//           <a href="#">Forgot Password</a>
//         </div>
//         <button type="submit">Log in</button>
//         <button className="google-login">
//           <span>Log in with Google</span>
//         </button>
//       </form>
//     </div>
//   );
// };
// export const SignUpUI = () => {
//   return (
//     <>
//       <form className="sign-up" action="">
//         <h1>Sign Up</h1>

//         <div className="input-box">
//           <input type="text" placeholder="Username" required />
//           <i className="bx bxs-user"></i>
//         </div>
//         <div className="input-box">
//           <input type="password" placeholder="Password" required />
//           <i className="bx bxs-lock-alt"></i>
//         </div>
//         <div className="remember-forgot">
//           <label>
//             <input type="checkbox" />
//             Remember Me
//           </label>
//         </div>
//         <button type="submit" className="log-in-btn btn">
//           Sign Up
//         </button>
//         {/* This button handles google signup */}
//         <button type="button" className="btn google-sign-in">
//           <AiOutlineGoogle /> Sign up with Google
//         </button>
//         <div className="register-link">
//           <p>
//             Have an account? <Link to="/login">Login</Link>
//           </p>
//         </div>
//       </form>
//     </>
//   );
// };
