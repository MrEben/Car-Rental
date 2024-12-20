import React, { useState, useEffect } from "react";
import "./pages.css";
import { FaCertificate, FaStar, FaHeart } from "react-icons/fa";
import {
  AiOutlineShareAlt,
  AiFillCaretRight,
  AiFillSetting,
  AiFillCompass,
} from "react-icons/ai";
import Img from "../assets/carweb2.png";
import { Link } from "react-router-dom";
import { cars } from "../components/data";
import { useParams } from "react-router-dom";

const process = [
  {
    img: Img,
    "sub-head": "Choose a car",
    description: "We have a wide range of vehicles that would suit your desire",
  },
  {
    img: Img,
    "sub-head": "Make reservation",
    description:
      "Our dealers are ready to assist you reserve the best choice for you.",
  },
  {
    img: Img,
    "sub-head": "Let's drive",
    description:
      ". Check back later to see if reservation is approved.Enjoy your ride!",
  },
];
const CarDetails = () => {
  const { id } = useParams();
  const [selectedCarDetails, setselectedCarDetails] = useState([]);
  useEffect(() => {
    const newCar = cars.find((item) => item.id == id);
    setselectedCarDetails(newCar);
  }, [id]);

  return (
    <div className="car-details">
      <header>
        <div className="path-links">
          <h4>Home</h4>
          <AiFillCaretRight />
          <h4>Cars</h4>
          <AiFillCaretRight />
          <h4>{selectedCarDetails.name}</h4>
        </div>
        <div className="rent-details">
          <div>
            <h1>{selectedCarDetails.carName}</h1>
            <h2>{selectedCarDetails.cost}</h2>
          </div>
          <div>
            <button className="book-btn btn">Book Now</button>
            <AiOutlineShareAlt />
            <FaHeart />
          </div>
        </div>
      </header>
      <section>
        <main>
          <img src={selectedCarDetails.image} alt="no img" />
          <div className="car-specifications">
            <h3>Specifications</h3>
            <div className="specs">
              <div className="features">
                <span className="feature-tag">
                  {selectedCarDetails.features}
                </span>
              </div>
            </div>
          </div>
          <div className="car-about">
            <h3>Why Rent a Chervollete?</h3>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ab
              voluptatum praesentium ducimus dicta enim voluptate fuga fugit.
              Delectus voluptate quisquam mollitia repudiandae repellat et.
              Autem rem suscipit praesentium sit ipsam saepe ex magni quia nam
              tenetur impedit soluta doloremque distinctio nisi quibusdam totam
              perferendis, accusantium modi. Nam veniam necessitatibus quam
              distinctio eius neque, delectus illo voluptatum odit quis,
              obcaecati blanditiis quo nesciunt inventore aperiam aliquam
              quisquam incidunt repudiandae. Molestiae eaque itaque assumenda
              esse rem. Tempora quam alias saepe laboriosam minima aspernatur
              accusamus molestias est veritatis labore, quos laudantium ut?
              Soluta incidunt, perspiciatis nesciunt saepe blanditiis dolorum
              fugiat qui at.
            </h4>
          </div>
          <button className="book-btn btn">Book Now</button>
        </main>
        <aside>
          <div className="listing">
            <h3>Listed by</h3>
            {/* Car Brand Owner */}
            <h2>
              Rana Motors{" "}
              <span>
                <FaStar />
                <p>4.5 ratings</p>
              </span>
            </h2>
          </div>
          <div className="brand-location">
            <h3>Location</h3>
            <p>Marina Center. New Mako foods Arena, Accra</p>
          </div>
          <div className="brand-payment-methods">
            <h3>Supported Payment methods</h3>
            <ul>
              <li>Visa Card</li>
              <li>Mobile money(MTN, Vodafone)</li>
            </ul>
          </div>
          <Link>
            <h4>Explore all 40 cars of Rana Motors</h4>
          </Link>
        </aside>
      </section>
      <div className="process-heading">
        <h1>Step by Step Process to Book a Car</h1>
      </div>
      <div className="booking-steps">
        {process.map((item, index) => {
          return (
            <div key={index}>
              <div className="img">
                <img src={item.img} alt="img here" />
              </div>
              <div className="sub-head">
                <h3>{item["sub-head"]}</h3>
              </div>
              <div className="description">
                <h4>{item.description}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarDetails;
