import React from "react";

import img1 from "../../assets/products/image-1.png";
import img2 from "../../assets/products/image-2.png";
import img3 from "../../assets/products/image-3.png";
import img4 from "../../assets/products/image-4.png";
import img5 from "../../assets/products/image-5.png";
import img6 from "../../assets/products/image-8.png";
import img7 from "../../assets/products/image-9.png";
import img8 from "../../assets/products/image-11.png";

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
  {
    id: 5,
    title: "Awesome Product",
    price: 9.99,
    img: img5,
  },
  {
    id: 6,
    title: "Fragrant Cinnamon",
    price: 9.99,
    img: img6,
  },
  {
    id: 7,
    title: "Summer Cherries",
    price: 9.99,
    img: img7,
  },
  {
    id: 8,
    title: "Clean Lavander",
    price: 9.99,
    img: img8,
  },
];

const Products = () => {
  return (
    <section className="products wrapper pt-24">
      <div className="products__info">
        <h2>Products</h2>
        <p>Order it for you or for your beloved ones </p>
      </div>
      <div className="products__container">
        {data?.map((item) => {
          return (
            <div className="product" key={item.id}>
              <div className="product__img">
                <img src={item.img} alt="image of coloured bottle" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.price}$</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
