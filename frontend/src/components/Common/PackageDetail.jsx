import React from 'react'

import ProjectCard1 from './ProjectCard1'
import ProjectCard2 from './ProjectCard2'

const PackageDetail = () => {
  return (
    <div className='flex flex-col mt-10'>
        

        <div className='flex flex-col justify-center items-center'>
        <h1 className='lg:text-5xl text-2xl text-center poppins-bold text-[#1D8E8E]'>Premium & Economic Packages</h1>
        <p className='lg:text-lg text-sm poppins-medium py-3 text-[#1D8E8E]'>Customize Your Trips According to Your Wish</p>
        <button className='text-center p-2 bg-[#1D8E8E] px-4 text-white  rounded-md'>Plan Your Trip</button>

        </div>

        <div className='flex flex-col'>
          <ProjectCard1/>
          <ProjectCard2/>
          <ProjectCard1/>
          <ProjectCard2/>

        </div>
        
    
    
    </div>
  )
}

export default PackageDetail