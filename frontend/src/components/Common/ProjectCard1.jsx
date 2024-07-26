import React from 'react'
import image from  '../../Image/Premium&Economic/Tourism1.png'
const ProjectCard1 = () => {
  return (
    <div className='lg:m-10 m-4 lg:mt-10 mt-10 flex flex-col lg:flex-row justify-center items-center'>
        <div className=' flex flex-col justify-center  p-2 lg:w-3/5'>
        <h1 className='poppins-bold text-[#1D8E8E] text-4xl'>Pilgrim Tourism</h1>
        <p className='poppins-regular text-[#1D8E8E] '>Visit the world famous pilgrimage, spiritual centres and religious places with your family. We offer a wide range of packages over the world.</p>

        <button className='text-center p-2 hidden lg:block w-1/6 bg-[#1D8E8E] text-white poppins-medium rounded-md '>Book Now</button>
         
        </div>
        <div className='  lg:w-2/5'>
        <img src={image} className='' alt='image'></img></div>
        <button className='text-center lg:hidden p-2 my-2  w-3/6 bg-[#1D8E8E] text-white poppins-medium rounded-md '>Book Now</button>

    </div>
  )
}

export default ProjectCard1