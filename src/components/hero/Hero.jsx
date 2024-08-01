import React from "react";

const Hero = () => {
  return (
    <section className="hero min-h-screen relative bg-[url('./src/assets/hero/bg-image.png')]">
      <div className="hero__main bg-[#F7F8FACC] py-8 px-[10vw] text-center">
        <h2 className="text-[2rem] md:text-[2.5rem]">🌱</h2>
        <h1 className="text-[2rem] md:text-[2.5rem]">The nature candle</h1>
        <p className="md:text-[1.125rem] max-w-[33.5rem]">
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments{" "}
        </p>
        <button className="btn btn-success rounded-md text-white text-[1.125rem] md:text-[1.26rem] px-12 mt-12">
          Discovery our collection
        </button>
      </div>
    </section>
  );
};

export default Hero;
