import React from 'react';
import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';

const Works = () => {
    return (
      <div className="flex flex-col pt-[80px]">
        <h1 className="text-3xl mx-auto text-center p-8">Recent works</h1>
        <div className="flex flex-row justify-around ">
          <div>
            <img src={work1} alt="" className="w-[400px] mx-auto" />
            <p className="mx-auto text-center text-2xl pt-4">
              Shoping App with Adobe XD
            </p>
          </div>
          <div>
            <img src={work2} alt="" className="w-[400px] mx-auto" />
            <p className="mx-auto text-center text-2xl  pt-4">
              Shopping App with Figma
            </p>
          </div>
        </div>
      </div>
    );
}

export default Works
