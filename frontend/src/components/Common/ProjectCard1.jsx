import React from 'react'

const ProjectCard1 = ({title,image,description}) => {
  return (
    <div className='lg:m-10 m-4 lg:mt-10 mt-10 flex flex-col lg:flex-row justify-center items-center'>
        <div className=' flex flex-col justify-center  p-2 lg:w-3/5'>
        <h1 className='poppins-bold text-[#1D8E8E] text-2xl lg:text-4xl'>{title}</h1>
        <p className='poppins-regular text-[#1D8E8E] '>{description}</p>

        <button className='text-center p-2 hidden lg:block w-1/6 bg-[#1D8E8E] text-white poppins-medium rounded-md '>Book Now</button>
         
        </div>
        <div className='    lg:w-2/5'>
        <img src={image} className='' alt={title}></img></div>
        <div className=' w-full lg:w-auto '>
        <button className='text-center lg:hidden p-2 my-2  w-3/6 bg-[#1D8E8E] text-white poppins-medium rounded-md '>Book Now</button>

        </div>
        

    </div>
  )
}

export default ProjectCard1