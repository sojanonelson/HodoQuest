// src/pages/Home.js
import React from 'react';

import Banner from '../Banner/Banner';
import About from '../About/About';

import Footer from '../Footer/Footer';



const Home = () => {
  return (
    <div className=' bg-white'>
      <Banner/>
      <About/>
      <section className="service-page lg:px-32 px-5  items-center ">
      <div className='flex flex-col text-left my-10'>
      <h1 className='poppins-bold text-xl'>Premium Services</h1>
      <p className='poppins-regular'>Includes food & accommodation starting from 4 Star rating facilities, luxury facilities and so on. Travel & Guide assistance also available.</p>
      </div>
      <div className='flex flex-col text-left'>
      <h1  className='poppins-bold' >Economic Services</h1>
      <p className='poppins-regular'>Includes food & accommodation up to 3 Star rating facilities. Travel & Guide assistance is also available.
      </p>
      </div>
    

    <div className='flex flex-col lg:flex-row poppins-medium items-center py-10 w-full justify-center lg:gap-32'>
    <div className='p-3  m-2 rounded-sm shadow-lg cursor-pointer'>
        <p className='poppins-medium'>24x7 Customer Care Support</p>
      </div>
      <div className='p-3 m-2 rounded-sm  shadow-lg cursor-pointer'>
        <p>Secure & Safe Journey</p>
      </div>
      <div className='p-3  m-2 rounded-sm  shadow-lg cursor-pointer'>
        <p>Affordable Packages</p>
      </div>
    </div>
     
      
     
    </section>
      
      <div className='p-4 flex flex-col justify-center items-center py-10 mt-5 h-auto bg-[#F6F4FF] rounded-md shadow-md'>
      <h1 className='lg:text-xl text-center font-bold mb-4 poppins-bold'>
        Enter your e-mail address and get a quote for your tourism project
      </h1>
      <div className='flex w-full max-w-md'>
        <input
          type="email"
          placeholder="Your email address"
          className='flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
        <button
          type="submit"
          className='px-4 py-2 bg-indigo-500 text-white rounded-r-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        >
          Get a Quote
        </button>
      </div>
      <p className='mb-2 poppins-regular py-3'>Step with us to this marvelous industry...</p>
     
    </div>
    <Footer/>
      
      
    </div>
  );
};

export default Home;
