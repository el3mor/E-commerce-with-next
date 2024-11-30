"use client";
import React from 'react'
import Image from 'next/image'

const ProductBanner = ({ product }) => {
  return (
    
    <div className='justify-self-center'>
  {product?.image?.[0]?.url ? (
    <Image
      src={product.image[0].url}
      alt={product.title || "Product image"}
      width={400}
      height={400}
      className='rounded-lg'
    />
  ) : (
    <div className='w-[410px] h-[225px] rounded-lg bg-gray-200 animate-pulse'></div>
  )}
</div>
  )
}

export default ProductBanner
