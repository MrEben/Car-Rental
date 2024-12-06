/* eslint-disable no-unused-vars */
import React from "react";
import "./nav.css";
import { links, social } from "./data";

import { AiOutlineUser, AiFillBell, AiFillAccountBook } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-bar">
          <ul>
            <li>
              <Link to="/" className="logo">
                <h2>Renturride</h2>
              </Link>
            </li>
            {/* works on this to acheive click highlight design */}
            <li className="links-container">
              <ul className="links">
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="app-links">
              <div>
                <Link className="log-in" to="/login">
                  <h4>
                    <span>Log in</span>
                  </h4>
                </Link>
              </div>
              <div>
                <Link to="/signup">
                  <h4>
                    <span>Get Started</span>
                  </h4>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
