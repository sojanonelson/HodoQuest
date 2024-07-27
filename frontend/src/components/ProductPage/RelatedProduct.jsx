import React from 'react';
import ProductCard from '../Common/ProductCard';
import Products from '../../Data/Products/Products';

const RelatedProduct = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:p-2 mt-10 lg:mt-2 mx-10 justify-center border-t-2 pt-2 '>
      <h1 className='text-[#1D8E8E] poppins-medium poppins-bold text-xl py-2'>Related products</h1>
      <div className=''>
        <div className='flex flex-col lg:flex-row  gap-4 justify-center items-center'>
          {Products.map((product, index) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedProduct;
