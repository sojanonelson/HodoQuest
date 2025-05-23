import React from 'react';
import Image from '../../Image/banner.png';

const Banner = () => {
  return (
    <div className="relative">
      <img src={Image} alt="banner" className="w-full h-[40%]" />
      <div className="absolute top-4  lg:top-7 lg:left-[900px] left-52   h-full flex flex-col items-center justify-center text-white">
        <h1 className="lg:text-6xl  text-xl poppins-bold font-bold">Explore निरन्तरा...</h1>
        <h1 className='text-white lg:text-xl poppins-regular'>EXPLORE WITH US</h1>
        <div className="lg:mt-3 lg:p-2 p-1 cursor-pointer rounded-lg hover:bg-white hover:text-[#1D8E8E]   text-white bg-[#1D8E8E]  lg:rounded-lg">
          <a href='https://forms.gle/GWe2vKBf94R3aKdf6' className="lg:text-lg text-sm poppins-regular lg:poppins-bold">Plan Your Trip</a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
