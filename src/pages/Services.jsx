import React from 'react'
import serviceIcon1 from "../assets/serviceIcon1.png";
import serviceIcon2 from "../assets/serviceIcon2.png";
import serviceIcon3 from "../assets/serviceIcon3.png";
import serviceIcon4 from "../assets/serviceIcon4.png";

const Services = () => {
  return (
    <>
      <div className="section  bg-slate-200 mt-[50px]">
        <div className=" flex flex-col pt-[120px] text-center">
          <h1 className="text-4xl">My Services</h1>
          <p className=" w-[600px] text-center mx-auto pt-4 text-2xl">
            UI/UX design,Web design, Web development, Graphic design, Business
            card, Brand guide, Packaging design and logo design
          </p>
        </div>
        <div className="flex md:flex-row sm:flex-col xsm:flex-col  gap-4 justify-around pt-[60px] mx-[60px]">
          <div>
            <img
              src={serviceIcon1}
              alt=""
              className="w-[180px] align-center m-auto"
            />
            <h2 className="text-center mx-auto text-3xl py-4">UI/UX Design</h2>
            <p className=" text-center w-150 px-2">
              User interface (UI) design refers to the aesthetic elements by
              which people interact with a product, such as buttons, icons, menu
              bars, typography, colors, and more. User experience (UX) design
              refers to the experience a user has when interacting with a
              product.
            </p>
          </div>
          <div>
            <img
              src={serviceIcon2}
              alt=""
              className="w-[180px] align-center m-auto"
            />
            <h2 className="text-center mx-auto text-3xl py-4">Web Design</h2>
            <p className=" text-center w-150 px-2">
              Web design refers to the design of websites that are displayed on
              the internet. It usually refers to the user experience aspects of
              website development rather than software development.
            </p>
          </div>
          <div>
            <img
              src={serviceIcon3}
              alt=""
              className="w-[180px] align-center m-auto"
            />
            <h2 className="text-center mx-auto text-3xl py-4">
              Graphic Design
            </h2>
            <p className=" text-center w-150 px-2">
              Graphic design is a creative process that combines art and
              technology to communicate ideas. The designer works with a variety
              of communication tools in order to convey a message from a client
              to a particular audience. The main tools are image and typography
            </p>
          </div>
          <div>
            <img
              src={serviceIcon4}
              alt=""
              className="w-[180px] align-center m-auto"
            />
            <h2 className="text-center mx-auto text-3xl py-4">Logo Design</h2>
            <p className=" text-center w-150 px-2">
              A logo is a symbol or design used to identify a company or
              organization, as well as its products, services, employees, etc.
              In its simplest definition, a logo identifies. It's how your
              company is recognized and remembered among others. It also
              functions as the face of your business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services
