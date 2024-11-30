"use client"
import React from 'react'
import ProductList from './ProductList'
import ProductApis from '../_utils/ProductApis'
import { useEffect,useState } from 'react'

const ProductSection = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getLatestPruoduct_()
  } , [])
  const getLatestPruoduct_ = () => {
    ProductApis.getLatestProducts().then((res) => {
      setProducts(res.data.data)
    }
    )
  }
  
  return (
    <div className='px-10 md:px-20'>
      <h2 className='text-3xl font-semibold mb-5'>Latest Products</h2>
      <ProductList prodcuts={products} />
    </div>
  )
}

export default ProductSection
