import React from 'react'
import image from '../../Image/products/honey.png'
const SelectedProduct = () => {
  return (
    <div className='  flex flex-col lg:flex-row p-10'>
        <div className='lg:w-2/4 justify-center flex '>
        <img src={image} alt='products' className='lg:w-2/4' ></img>

        </div>

        <div className='lg:w-2/4  flex flex-col gap-5'>
        <h1 className='poppins-regular text-4xl text-[#1D8E8E]'>Natural Honey</h1>
        <p className='poppins-medium text-xl text-[#1D8E8E]'>Experience Our Native Products</p>
        <p className='poppins-bold text-[#1D8E8E]'>We have large number of community products for you</p>
        <button className='text-center poppins-medium bg-[#1D8E8E] w-2/4 text-white p-2 rounded-lg'>Buy Now</button>


        </div>

    </div>
  )
}

export default SelectedProduct