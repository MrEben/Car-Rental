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
            <Link to="/" className="logo">
              <h2>
                Busy<span className="danger">Dev</span>
              </h2>
            </Link>
            {/* <li className="links-container">
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
            </li> */}
            <li className="app-links">
              <div>
                <Link className="log-in" to="">
                  <h4>
                    <span>Log in</span>
                  </h4>
                </Link>
              </div>
              <div>
                <Link to="./get-started">
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
