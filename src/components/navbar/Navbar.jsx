/* eslint-disable no-unused-vars */
import React from "react";
import "./nav.css";
import {
  AiOutlineUser,
  AiFillBell,
  AiFillAccountBook,
  AiFillCar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-bar">
          <ul>
            <Link to="/" className="logo">
              <AiFillCar />
              <h2>
                Busy<span className="danger">Dev</span>
              </h2>
            </Link>
            <li className="access-links">
              <a href="">Community</a>
              <a href="">Cars</a>
              <a href="">Our Work</a>
              <a href="">Services</a>
            </li>
            <li className="app-links">
              <div>
                <a to="">
                  <h4>
                    <span>Log in</span>
                  </h4>
                </a>
              </div>
              <div>
                <a to="">
                  <h4>
                    <span>Get Started</span>
                  </h4>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
