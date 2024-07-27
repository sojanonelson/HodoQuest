import React from 'react'
import SelectedProduct from './SelectedProduct'
import RelatedProduct from './RelatedProduct'

const ProductPage = () => {
  return (
    <div className='flex flex-col'>
      <SelectedProduct  />
      <RelatedProduct/>
      
    </div>
  )
}

export default ProductPage