import React from 'react'

const ProductCard = ({name,image}) => {
  return (
    <div className='flex flex-col text-[#1D8E8E] p-10'>
        <img src={image} alt={name} className='w-64'></img>
        <p className='text-[#1D8E8E] text-center py-2 poppins-medium'>{name}</p>


    </div>
  )
}

export default ProductCard