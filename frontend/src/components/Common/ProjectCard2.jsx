import React from 'react'

const ProjectCard1 = ({title,image,description,link}) => {
  return (
    <div className='lg:m-10 m-4 lg:mt-10 mt-10 flex flex-col lg:flex-row'>

<div className='  lg:w-2/5'>
        <img src={image} className='' alt={title}></img>
        </div>

        <div className=' flex flex-col justify-center  p-2 lg:w-3/5'>
        <h1 className='poppins-bold text-[#1D8E8E] text-4xl'>{title}</h1>
        <p className='poppins-regular text-[#1D8E8E] '>{description}</p>

        <a href={link}><button className='text-center p-2 hidden lg:block w-1/6 bg-[#1D8E8E] text-white poppins-medium rounded-md '>Book Now</button></a>
         
        </div>

        

        <a href={link}><button className='text-center lg:hidden p-2 my-2  w-3/6 bg-[#1D8E8E] text-white poppins-medium rounded-md '>Book Now</button>
        </a>
    </div>
  )
}

export default ProjectCard1