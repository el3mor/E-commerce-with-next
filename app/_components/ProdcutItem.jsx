import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "Product",
}

const ProdcutItem = ({product}) => {
  const imgSrc = product.image[0].url
  return (
    <Link href={`/product-details/${product?.documentId}`} className='p-1 border-teal-400 rounded-lg hover:border hover:shadow-md hover:cursor-pointer'>
    <div className='rounded-lg shadow-md cursor-pointer hover:scale-105 hover:ring-2 hover:ring-primary'>
      <Image 
        src={product.image[0].url}
        alt={product.title}
        width={300}
        height={350}
        className='rounded-t-lg h-[170px] w-full object-cover '
      />
      <div className='flex justify-between items-center gap-2 p-2'>
        <div>
          <h3 className='text-[12px] font-medium line-clamp-1'>{product.title}</h3>
          <p className='text-[10px] font-semibold text-gray-400'>{product.category}</p>
        </div>
        <div>
          <p className='text-[12px] font-medium'>${product.price}</p>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default ProdcutItem
