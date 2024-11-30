"use client";
import BreadCrumb from '../../_components/BreadCrumb';
import ProductApis from '../../_utils/ProductApis';
import React, { useEffect,useState } from 'react'
import { use } from "react";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from './_components/ProductInfo';
import ProductList from '../../_components/ProductList';

const page = ({params}) => {
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const { productId } = use(params);
  
  const getProductById_ = () => {ProductApis.getProductById(productId).then(res => {
    setProduct(res.data.data)
    getProductByCategory_(res.data.data)
  })};
  const getProductByCategory_ = (product) => {ProductApis.getProductByCategory(product.category).then(res => {
    setSimilarProducts(res.data.data)
  } )}
  useEffect(() => {
    getProductById_()
  } ,[])
  return (
    <div className='px-10 py-8 md:px-28'>
      <BreadCrumb />
      <div className='grid justify-around grid-cols-1 gap-5 mt-10 sm:gap-2 sm:grid-cols-2 mx-5'> 
        <ProductBanner product={product} />
        <ProductInfo product={product} />
      </div>
      <div>
        <h2 className='text-2xl font-bold my-10'>Similar Products</h2>
        {similarProducts.filter(p => p.id !== product.id).length > 0 ? <ProductList prodcuts={similarProducts.filter(p => p.id !== product.id)} /> : <h2 className='text-center text-gray-400'>No Similar Products Found</h2>}
      </div>

    </div>
  )
}

export default page
