import React from 'react'
import ProdcutItem from './ProdcutItem'


const ProductList = ({prodcuts}) => {
  
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 content-center gap-5 justify-items-center '>
      {prodcuts.map(product => (
        <ProdcutItem key={product.id} product={product} />)
      )}
    </div>
  )
}

export default ProductList
