import React from 'react';
import ProjectCard1 from './ProjectCard1';
import ProjectCard2 from './ProjectCard2';


const PackageDetail = ({data}) => {
  console.log(data)
  return (
    <div className='flex flex-col mt-10'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='lg:text-5xl text-2xl text-center poppins-bold text-[#1D8E8E]'>{data.title}</h1>
        <p className='lg:text-lg text-sm poppins-medium py-3 text-[#1D8E8E]'>{data.description}</p>
        <button className='text-center p-2 bg-[#1D8E8E] px-4 text-white rounded-md'>{data.buttonTitle}</button>
      </div>

      <div className='flex flex-col'>
        {data.content.map((item, index) => {
          const ProjectCard = index % 2 === 0 ? ProjectCard1 : ProjectCard2;
          return (
            <ProjectCard
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
              link={'#'} // Assuming the link is same for all cards
            />
          );
        })}
      </div>
    </div>
  );
}

export default PackageDetail;
