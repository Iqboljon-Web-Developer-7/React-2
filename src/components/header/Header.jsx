import React from "react";

import websiteLogo from "../../assets/header/logo.png";
import profileLogo from "../../assets/header/Profile.svg";
import cartLogo from "../../assets/header/Cart.svg";

const Header = () => {
  return (
    <div className="navbar wrapper">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
          >
            <li>
              <a>Blogs</a>
            </li>
            <li>
              <a>Discovery</a>
              <ul className="p-2">
                <li>
                  <a>Blogs</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={websiteLogo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Discovery</summary>
              <ul className="p-2 text-white">
                <li>
                  <a>Blogs</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <img src={profileLogo} alt="profile logo" className="max-w-[1.6rem]" />
        <img src={cartLogo} alt="cart logo" className="max-w-[1.6rem]" />
      </div>
    </div>
  );
};

export default Header;
