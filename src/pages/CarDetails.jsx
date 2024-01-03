import React from "react";
import "./pages.css";
import {
  AiOutlineShareAlt,
  AiFillSave,
  AiFillCaretRight,
} from "react-icons/ai";
import Img from "../assets/carweb.png";

const CarDetails = () => {
  return (
    <div className="car-details">
      <header>
        <div className="path-links">
          <h4>
            Home
            <AiFillCaretRight />
            Cars
            <AiFillCaretRight />
            CarName
          </h4>
        </div>
        <div className="rent-details">
          <div>
            <h1>Toyota 65</h1>
            <h2>50GHC/day</h2>
          </div>
          <div>
            <AiOutlineShareAlt />
            <AiFillSave />
          </div>
        </div>
      </header>
      <section>
        <main>
          <img src={Img} alt="no img" />
        </main>
        <aside>
          <div className="listing">
            <h3>Listed by</h3>
            {/* Car Brand Owner */}
            <h2>Rana Motors</h2>
          </div>
          <div className="brand-location">
            <h3>Location</h3>
            {/* Insert mini map */}
          </div>
        </aside>
      </section>
    </div>
  );
};

export default CarDetails;
