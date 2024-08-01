import React from "react";
import card1 from "../assets/card1.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import banner from "../assets/banner.png";
import rating1 from "../assets/rating1.png";

const Reviews = () => {
  return (
    <div className="flex flex-col bg-slate-200 pt-[100px] justify-around mx-auto">
      <h1 className="mx-auto text-center text-3xl">What Customer's Say</h1>
      <div className="flex flex-row justify-around gap-2  mt-[50px] relative">
        <div className="">
          <img src={card1} alt="" className="card w-[300px]" />
          <img
            src={profile1}
            alt=""
            className="absolute customer-img  w-[70px]  top-[-30px] ml-[120px] items-center"
          />
          <img
            src={rating1}
            alt=""
            className="star-ratings absolute w-[150px] top-[60px] text-center ml-[100px]"
          />
        </div>
        <div className="relative">
          <img src={card1} alt="" className="card w-[300px]" />
          <img
            src={profile2}
            alt=""
            className="absolute customer-img  w-[70px]  top-[-30px] ml-[120px] items-center"
          />
          <img
            src={rating1}
            alt=""
            className="star-ratings absolute w-[150px] top-[60px] text-center ml-[100px]"
          />
        </div>
        <div className="relative">
          <img src={card1} alt="" className="card w-[300px]" />
          <img
            src={profile3}
            alt=""
            className="absolute customer-img  w-[70px]  top-[-30px] ml-[120px] items-center"
          />
          <img
            src={rating1}
            alt=""
            className="star-ratings absolute w-[150px] top-[60px] text-center ml-[100px]"
          />
        </div>
      </div>
      <div>
        <img
          src={banner}
          alt=""
          className=" pt-[20px] w-[400]  px-[200px]"
        />
      </div>
    </div>
  );
};

export default Reviews;
