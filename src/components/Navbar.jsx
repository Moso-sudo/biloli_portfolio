  import React from "react";

import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import Btn from "./Btn"
const Navbar = () => {
  return (
    <>
      <div className="bg-white flex flex-row sticky mx-auto z-[20] justify-around pt-8">
        <div className="flex flex-row">
          <img src={logo} alt="" className="w-[130px] h-[100px]"/>
          <span className="pt-[60px] text-2xl bold">Studio</span>
        </div>
        <div>
          <ul className="flex ] md:flex-row align-center gap-20 sm:flex-col pt-10">
            <li>
              <a href="./">Home</a>
            </li>
            <li>
              <a href="/Services">Services</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/">Gallery</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <Btn/>    
      </div>
    </>
  );
};

export default Navbar;
