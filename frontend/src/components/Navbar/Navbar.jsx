import React, { useState } from 'react';
import Logo from '../../Image/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className='p-2 py-5 w-full flex flex-row items-center justify-between'>
      <img alt='Logo' src={Logo} className='w-32 lg:mx-10' />
      <div className='hidden lg:block'>
        <div className='flex flex-row gap-10 items-center'>
          <Link to='/'><h1 className='text-[#1D8E8E] poppins-regular cursor-pointer text-lg'>Home</h1></Link>
          
          <Link to='service'><h1 className='text-[#1D8E8E] poppins-regular cursor-pointer text-lg'>Service</h1></Link>
          <Link to='products'><h1 className='text-[#1D8E8E] poppins-regular cursor-pointer text-lg'>Tourism Products</h1></Link>
          <Link to='contact'><h1 className='text-[#1D8E8E] poppins-regular cursor-pointer text-lg'>Contact Us</h1></Link>
          <div className='flex p-2 hover:bg-[#31acac] items-center rounded-lg cursor-pointer bg-[#1D8E8E]'>
            <h1 className='px-2 text-white'>Join Us</h1>
          </div>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className='lg:hidden'>
        <button onClick={toggleDrawer} className='text-[#1D8E8E]'>
          {isDrawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeDrawer}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className='p-4 flex flex-col'>
          <Link to='/' className='text-[#1D8E8E] poppins-regular cursor-pointer text-lg'>Home</Link>
          <Link to='/service' className='text-[#1D8E8E] poppins-regular cursor-pointer text-lg'>Service</Link>
          <Link to='/products' className='text-[#1D8E8E] poppins-regular cursor-pointer text-lg'>Tourism Products</Link>
          <Link to='/contact' className='text-[#1D8E8E] poppins-regular cursor-pointer text-lg'>Contact Us</Link>
          <div className='flex p-2 mt-4 hover:bg-[#31acac] items-center rounded-lg cursor-pointer bg-[#1D8E8E]'>
            <h1 className='px-2 text-white'>Join Us</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
