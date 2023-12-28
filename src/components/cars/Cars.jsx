import React, { useState, useEffect } from "react";
import {
  AiFillStar,
  AiFillSetting,
  AiFillSafetyCertificate,
  AiFillCompass,
} from "react-icons/ai";
import Img from "../../assets/carweb2.png";
import { FaCertificate } from "react-icons/fa";
import "./index.css";
const cars = [
  {
    img: Img,
    brand: "toyota",
    carName: "Bugatti v47",
    ratings: "5 stars",
    mechanic: "automatic",
    fuel: "diesel",
    speed: "100km/h",
    color: "black",
    cost: "GHC500/day",
  },
  {
    img: Img,
    carName: "Chervolette",
    brand: "audi",
    ratings: "5 stars",
    mechanic: "manual",
    fuel: "petrol",
    speed: "100km/h",
    color: "black",
    cost: "GHC1000/day",
  },
  {
    img: Img,
    carName: "Toyota",
    brand: "honda",
    ratings: "5 stars",
    mechanic: "automatic",
    fuel: "petrol",
    speed: "300km/h",
    color: "red",
    cost: "GHC200/day",
  },
  {
    img: Img,
    carName: "Bugatti",
    brand: "nissan",
    ratings: "5 stars",
    mechanic: "automatic",
    fuel: "petrol",
    speed: "100km/h",
    color: "black",
    cost: "GHC200/day",
  },
  {
    img: Img,
    carName: "Bugatti",
    brand: "nissan",
    ratings: "5 stars",
    mechanic: "automatic",
    fuel: "petrol",
    speed: "100km/h",
    color: "black",
    cost: "GHC200/day",
  },
  {
    img: Img,
    carName: "Bugatti",
    brand: "nissan",
    ratings: "5 stars",
    mechanic: "automatic",
    fuel: "petrol",
    speed: "100km/h",
    color: "black",
    cost: "GHC200/day",
  },
  {
    img: Img,
    carName: "Bugatti",
    brand: "mazda",
    ratings: "5 stars",
    mechanic: "automatic",
    fuel: "petrol",
    speed: "100km/h",
    color: "black",
    cost: "GHC200/day",
  },
  {
    img: Img,
    carName: "Bugatti",
    brand: "honda",
    ratings: "5 stars",
    mechanic: "automatic",
    fuel: "petrol",
    speed: "100km/h",
    color: "black",
    cost: "GHC200/day",
  },
];
const Cars = () => {
  const [categories, setCategories] = useState(["all"]);
  const [activeBtn, setActiveBtn] = useState("all");

  useEffect(() => {
    displayButtons();
  }, []);

  function displayButtons() {
    const uniqueCategories = cars.reduce(
      (values, item) => {
        if (!values.includes(item.brand)) {
          values.push(item.brand);
        }
        return values;
      },
      ["all"]
    );

    setCategories(uniqueCategories);
  }
  return (
    <>
      <section>
        <div className="heading">
          <h1>Explore our Vehicles</h1>
          <div className="underline"></div>
        </div>
        <div className="buttons">
          {categories.map((category, index) => (
            <button
              key={index}
              className={activeBtn === category ? "active btn bn " : "btn bn"}
              data-gh={category}
              // className="btn bn"
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="articles">
          {cars.map((item, index) => {
            const {
              img,
              carName,
              ratings,
              mechanic,
              fuel,
              cost,
              speed,
              color,
            } = item;
            return (
              <article key={index}>
                <figure>
                  <img src={img} alt={carName} />
                </figure>
                <div className="article-preview">
                  <h2>{carName}</h2>
                  {/* write js to determine no of stars shown */}
                  <div className="ratings">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <h4>5</h4>
                  </div>
                  <div className="specs">
                    <div>
                      <AiFillSetting />
                      <small>{mechanic}</small>
                    </div>
                    <div>
                      <AiFillSetting />
                      <small>{fuel}</small>
                    </div>
                    <div>
                      <AiFillCompass />
                      <small>{speed}</small>
                    </div>
                    <div>
                      <FaCertificate />
                      <small>{color}</small>
                    </div>
                  </div>
                  <div className="rate">
                    <h4>{cost}</h4>
                    <button className="btn rent-btn">Rent now</button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Cars;
