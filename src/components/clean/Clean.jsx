import React from "react";

import { CiCircleCheck } from "react-icons/ci";

import img from "../../assets/clean/clean.png";

const data = [
  {
    id: 1,
    title: "Eco-sustainable:",
    desc: "All recyclable materials, 0% CO2 emissions",
  },
  {
    id: 2,
    title: "Hyphoallergenic:",
    desc: "100% natural, human friendly ingredients",
  },
  {
    id: 3,
    title: "Handmade:",
    desc: "All candles are craftly made with love.",
  },
  {
    id: 4,
    title: "Long burning:",
    desc: "No more waste. Created for last long.",
  },
];

const Clean = () => {
  return (
    <section className="clean-container">
      <div className="clean wrapper">
        <div className="clean__info">
          <div>
            <h2>Clean and fragrant soy wax</h2>
            <p>Made for your home and for your wellness</p>
          </div>
          <div className="advantages">
            {data.map((item) => {
              return (
                <div className="advantage">
                  <CiCircleCheck />
                  <h4>
                    {item.title}
                    <span>{item.desc}</span>
                  </h4>
                </div>
              );
            })}
          </div>
          <button className="btn btn-success rounded-md text-white text-xl px-12">
            Learn more
          </button>
        </div>
        <div className="clean__img">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Clean;
