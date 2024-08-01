import React from 'react'
import designerTools from "../assets/designer-tools.png"
import bill from "../assets/bill.png";
import Btn from "./Btn"
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="flex md:flex-row w-full justify-around mt-8 sm:flex-col align-center mx-10">
      <div className="w-[500px]">
        <img src={bill} alt="" className="w-[170px]  h-[170px] mx-10" />
        <h1 className="text-5xl pt-8">I provide the best design for you</h1>
        <p className="pt-8">
          It is with great pleasure that I find this time and opportunity to
          share with you part of what I do at BiloliE Creative. I do all Kinds
          of Graphic design. I have the best required skills to give you the
          best service you can imagine
        </p>
        <div className="mt-10 flex align-center gap-10">
          <a
            href="/services"
            className=" bg-black p-2 rounded-br-3xl rounded-tl-3xl text-white"
          >
            <h2 className="align-center  py-0 px-8 text-2xl">Services</h2>
          </a>
          <Btn />
        </div>
        <div className="flex flex-row gap-10 mt-8 ">
          <a href="">
            <CiFacebook className="size-[30px]" />
          </a>
          <a href="">
            <FaXTwitter className="size-[30px]" />
          </a>
          <a href="">
            <CiInstagram className="size-[30px] text-3xl" />
          </a>
        </div>
      </div>
      <div className="flex flex-row ] mx-10 ">
        <img src={designerTools} alt="" className="w-[550px] h-[657.29px]" />
      </div>
    </div>
  );
}

export default HeroSection
