import React from "react";
import Img from "../assets/3232521377.png";
import Img1 from "../assets/pexels-invisiblepower-320956.jpg";
import Img2 from "../assets/photo4992480194463902056.jpg";
import "./pages.css";

const Blogs = () => {
  return (
    <div className="blogs-section">
      <section className="heros">
        <h1>Rentals and Travel Inspiration</h1>
        <div className="article-cards">
          <div className="article-card">
            <img src={Img} alt="Desert road trip" />
            <div className="card-content">
              <span className="tag">Guide</span>
              <h3>
                Top 10 Road Trip Destinations to Explore with a Rental Car
              </h3>
              <span className="date">15 Sep 2023</span>
            </div>
          </div>
          <div className="article-card">
            <img src={Img1} alt="Mountain driving" />
            <div className="card-content">
              <span className="tag">Tips & Tricks</span>
              <h3>How to Save Money on Car Rentals: Tips and Tricks</h3>
              <span className="date">15 Sep 2023</span>
            </div>
          </div>
          <div className="article-card">
            <img src={Img2} alt="Scenic drive" />
            <div className="card-content">
              <span className="tag">Guide</span>
              <h3>
                A Beginner's Guide to Renting the Perfect Car for Your Trip
              </h3>
              <span className="date">15 Sep 2023</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          Here is our Contact information which includes office address, our
          phone number and web address.
        </p>
        <p className="contact-subtitle">
          You can visit our office any day or write us or call us our number any
          time
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <div className="icon">📞</div>
            <h3>Call Us On</h3>
            <p>+0123 456 789</p>
          </div>
          <div className="contact-item">
            <div className="icon">🕒</div>
            <h3>Open Hour</h3>
            <p>7:00 am - 11:15 pm</p>
          </div>
          <div className="contact-item">
            <div className="icon">✉️</div>
            <h3>Email Address</h3>
            <p>renturride@info.com</p>
          </div>
        </div>
        <button className="contact-button">Contact Us</button>
      </section>
    </div>
  );
};

export default Blogs;
