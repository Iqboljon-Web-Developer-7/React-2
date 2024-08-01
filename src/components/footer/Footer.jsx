import React from "react";

import img from "../../assets/footer/logo.png";

const Footer = () => {
  return (
    <footer className="footer bg-[#272727] px-[4vw]">
      <div className="wrapper py-24 w-full">
        <div className="line w-full h-[.1rem] bg-white rounded-md"></div>
        <div className="footer__container w-full mt-4 flex justify-between flex-col md:flex-row gap-y-10">
          <div className="footer__container--item">
            <img src={img} alt="" />
            <p className="text-white mt-3 text-[1rem] max-w-[14.8rem]">
              Your natural candle made for your home and for your wellness.
            </p>
          </div>
          <div className="footer__container--item w-full md:w-2/4 mt-4">
            <div className="footer-links flex text-[#E1E1E1] gap-[10%] flex-col pl-[4vw] sm:pl-0 sm:flex-row gap-y-12 text-[1rem]">
              <div className="links flex flex-col gap-[1rem]">
                <a href="#" className="text-[#56B280] mb-4">
                  Discovery
                </a>
                <a href="#" className="hover:text-white transition-all">
                  New season
                </a>
                <a href="#" className="hover:text-white transition-all">
                  Most searched
                </a>
                <a href="#" className="hover:text-white transition-all">
                  Most selled
                </a>
              </div>
              <div className="links flex flex-col gap-[1rem]">
                <a href="#" className="text-[#56B280] mb-4">
                  About
                </a>
                <a href="#" className="hover:text-white transition-all">
                  Help
                </a>
                <a href="#" className="hover:text-white transition-all">
                  Shipping
                </a>
                <a href="#" className="hover:text-white transition-all">
                  Affiliate
                </a>
              </div>
              <div className="links flex flex-col gap-[1rem]">
                <a href="#" className="text-[#56B280] mb-4">
                  Info
                </a>
                <a href="#" className="hover:text-white transition-all">
                  Contact us
                </a>
                <a href="#" className="hover:text-white transition-all">
                  Privacy Policies
                </a>
                <a href="#" className="hover:text-white transition-all">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
