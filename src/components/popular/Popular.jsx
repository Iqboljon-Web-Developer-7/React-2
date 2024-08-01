import React from "react";

import img1 from "../../assets/products/image-1.png";
import img2 from "../../assets/products/image-2.png";
import img3 from "../../assets/products/image-3.png";
import img4 from "../../assets/products/image-4.png";

const data = [
  {
    id: 1,
    title: "Spiced Mint",
    price: 9.99,
    img: img1,
  },
  {
    id: 2,
    title: "Sweet Straweberry",
    price: 9.99,
    img: img2,
  },
  {
    id: 3,
    title: "Cool Blueberries",
    price: 9.99,
    img: img3,
  },
  {
    id: 4,
    title: "Juicy Lemon",
    price: 9.99,
    img: img4,
  },
];

const Popular = () => {
  return (
    <section className="popular wrapper pt-20 pb-16">
      <div className="popular__info text-center">
        <h2 className="text-[2.5rem]">Popular</h2>
        <p className="text-[#5E6E89]">
          Our top selling product that you may like
        </p>
      </div>
      <div className="popular__container grid  xs:grid-cols-2 md:grid-cols-4 gap-[1%] md:gap-[3%] mt-12">
        {data?.map((item) => {
          return (
            <div className="popular shadow-md rounded-md" key={item.id}>
              <div className="popuar__img">
                <img
                  src={item.img}
                  alt="image of coloured bottle"
                  className="mx-auto bg-[#F7F8FA] w-full"
                />
              </div>
              <h3 className="ps-4 mt-3">{item.title}</h3>
              <p className="text-end text-[1.125rem] pe-4 my-3 text-[#56B280]">
                {item.price}$
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Popular;
