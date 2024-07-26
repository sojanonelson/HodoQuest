import React from 'react';
import Image from '../../Image/banner.png';

const Banner = () => {
  return (
    <div className="relative">
      <img src={Image} alt="banner" className="w-full h-[40%]" />
      <div className="absolute top-4  lg:top-20 left-0 w-full h-full flex flex-col items-center justify-center text-white">
        <h1 className="lg:text-6xl text-xl poppins-bold font-bold">Explore निरन्तरा...</h1>
        <h1 className='text-white lg:text-xl poppins-thin'>EXPLORE WITH US</h1>
        <div className="lg:mt-3 lg:p-2 cursor-pointer hover:bg-[#1D8E8E] text-[#1D8E8E]  hover:text-white bg-white rounded-sm lg:rounded-lg">
          <h1 className="lg:text-lg text-sm ">Plan Your Trip</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
