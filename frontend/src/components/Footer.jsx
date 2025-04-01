import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Link to="/">
            <img src={assets.logo} className="mb-5 w-32" alt="" />
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            "Veyn Collection is where fashion meets individuality. Explore our
            curated range of clothing designed to make you feel confident and
            stylish every day."
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>

          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to="/" >
              <li>Home</li>
            </NavLink>
            <NavLink to="/collection" >
              <li>Collection</li>
            </NavLink>
            <NavLink to="/about" >
              <li>About</li>
            </NavLink>
            <NavLink to="/contact" >
              <li>Contact</li>
            </NavLink>
            <NavLink to="/terms" >
              <li>Terms and Conditions</li>
            </NavLink>
           
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 8821851060</li>
            <li>0junedmansuri@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2024 Veyn Collection. Designed with passion, crafted for
          you -All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
