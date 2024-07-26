import React from 'react';

import Footer from '../components/Footer/Footer';
import Package from '../Data/PricePackage/Package';
import PricePackage from '../components/Common/PricePackage';

function ServiceDetails() {
  return (
    <main>
          <div className='flex flex-col'>
      <div className='flex flex-col mt-10 justify-center items-center'>
      <h1 className='text-center poppins-bold text-[#1D8E8E] lg:text-5xl text-3xl '>Exclusives for You ! </h1>
      <p className='text-center poppins-regular py-3 text-[#1D8E8E]'>Plan Your Trip with Us</p>
      <div className='bg-[#F5F5F5] rounded-lg p-2 flex  flex-row gap-4 justify-center items-center'>
        
          <div className='bg-white p-1'>
          <p className='poppins-medium'>Customizable </p>
        </div>
        <div className=' p-1' >
          <p className='poppins-medium'>Afforable </p>
        </div>

      

        


      </div>
      <div className='flex lg:flex-row flex-col  justify-between items-center gap-2  py-10'>
        
        {Object.keys(Package).map((key) => (
        <PricePackage key={key} packageDetails={Package[key]} link='#' />
      ))}

      </div>

      </div>
      

    </div>
      <Footer/>
    </main>
  );
}

export default ServiceDetails;
