import React from 'react'
import tool from '../assets/tools.png'
import compImg from '../assets/compImg.png';
import { FaArrowRight } from "react-icons/fa";
const AllSevices = () => {
  return (
    <div className="flex flex-col text-center pt-[100px]">
      <div className="pt-5">
        <button className="p-3 bg-[#FB8A06] rounded-br-3xl rounded-tl-3xl text-white flex flex-row mx-auto gap-4">
          See All Services
          <FaArrowRight className=" size-6" />
        </button>
      </div>
      <div className="flex flex-row mx-auto gap-[80px] justify-around">
        <div className="w-[400px]">
          <img src={tool} alt="" />
        </div>
        <div>
          <img src={compImg} alt="" className="w-[150px] float-right" />
          <h2 className="text-4xl align-cente pt-[200px] w-[400px]">
            Welcome to my studio, get the best services
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AllSevices
