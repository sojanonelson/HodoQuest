import React from 'react';
import { Link } from 'react-router-dom';

const PricePackage = ({ packageDetails, link }) => {
  console.log("DATA:", packageDetails.link);
  return (
    <div className='shadow-lg p-8 lg:mx-8 w-4/5 my-2 rounded-lg flex flex-col bg-white flex-grow lg:h-[300px]'>
      <h1 className='poppins-medium text-xl mb-4'>{packageDetails.name}</h1>
      <ul className='list-disc list-inside px-5 mb-4'>
        {packageDetails.features.map((feature, index) => (
          <a href={packageDetails.link}><li key={index} className='poppins-regular text-[#454545]'>{feature}</li></a>
        ))}
      </ul>
      <Link to={packageDetails.link} className='flex justify-center items-center w-full mt-auto'>
        <button className='bg-[#1D8E8E] text-white w-full rounded-lg px-2 py-2'>View more..</button>
      </Link>
    </div>
  );
}

export default PricePackage;
