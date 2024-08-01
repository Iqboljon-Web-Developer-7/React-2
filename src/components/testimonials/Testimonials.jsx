import React from "react";

import img1 from "../../assets/testimonials/img-1.png";
import img2 from "../../assets/testimonials/img-2.png";
import img3 from "../../assets/testimonials/img-3.png";

import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

const Testimonials = () => {
  return (
    <section className="bg-[#56B2801A] py-24">
      <div className="wrapper testimonials">
        <div className="testimonials__info text-center">
          <h2 className="text-[2.5rem]">Testimonials</h2>
          <p className="text-[1.125rem] text-[#5E6E89]">
            Some quotes from our happy customers
          </p>
        </div>
        <div className="testimonials__container grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-[3%] mt-10">
          <div className="testimonial bg-white text-center p-4 pb-5">
            <div className="testimonial__img">
              <img src={img1} alt="img of woman" className="mx-auto" />
              <div className="stars flex justify-center gap-1">
                <IoStar color="#56B280" />
                <IoStar color="#56B280" />
                <IoStar color="#56B280" />
                <IoStar color="#56B280" />
                <IoStarHalf color="#56B280" />
              </div>
              <h3 className="testimonial__quote mt-5 text-2xl">
                “I love it! No more air fresheners”
              </h3>
              <p className="testimonial__name text-[#7C8087]">Luisa</p>
            </div>
            <div className="testimonial__info"></div>
          </div>
          <div className="testimonial bg-white text-center p-4 pb-5">
            <div className="testimonial__img">
              <img src={img2} alt="img of woman" className="mx-auto" />
              <div className="stars flex justify-center gap-1">
                <IoStar color="#56B280" />
                <IoStar color="#56B280" />
                <IoStar color="#56B280" />
                <IoStar color="#56B280" />
                <IoStar color="#56B280" />
              </div>
              <h3 className="testimonial__quote mt-5 text-2xl">
                “Raccomended for everyone”
              </h3>
              <p className="testimonial__name text-[#7C8087]">John</p>
            </div>
            <div className="testimonial__info"></div>
          </div>
          <div className="testimonial bg-white text-center p-4 pb-5 md:col-span-2 lg:col-span-1">
            <div className="testimonial__img">
              <img src={img3} alt="img of woman" className="mx-auto" />
              <div className="stars flex justify-center gap-1">
                <IoStar color="#56B280" />
                <IoStar color="#56B280" />
                <IoStar color="#56B280" />
                <IoStar color="#56B280" />
                <IoStarHalf color="#56B280" />
              </div>
              <h3 className="testimonial__quote mt-5 text-2xl">
                “Looks very natural, the smell is awesome”
              </h3>
              <p className="testimonial__name text-[#7C8087]">Lucy</p>
            </div>
            <div className="testimonial__info"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
