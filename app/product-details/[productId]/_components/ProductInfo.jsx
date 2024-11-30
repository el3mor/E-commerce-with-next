"use client";
import React from 'react'
import { ShoppingCart, BadgeCheck, AlertOctagon } from 'lucide-react'
import SkeletonProductInfo from './SkeletonProductInfo'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'
import CardApis from '../../../_utils/CardApis';
import { useCart } from '../../../_context/CartContext';
const ProductInfo = ({product}) => {
  const {user} = useUser();
  const router = useRouter();
  const {cart, setCart} = useCart();
  const hundleAddToCart = () => {
    if(!user){
      router.push('/sign-in')
    }else{
      const data = {
        data:{
          username:user.fullName,
          email:user.primaryEmailAddress.emailAddress,
          products:[product.documentId],
        }
      }
      CardApis.addToCart(data).then((res) => {
        setCart((odlCart) => [...odlCart, {
          id:res.data.data.documentId,
          email:res.data.data.email,
          product:product
        }])
        console.log("allcart",cart)
    }).catch((err) => {
      console.log(err)
    })
  }}
  return (
   
   <div>
    {product?.title ? (
       <div>
       <h2 className='text-[20px]'>{product.title}</h2>
       <h2 className='text-[15px] text-gray-400'>{product?.category}</h2>
       <h2 className='text-[11px] mt-2'>{product?.attributes?.description[0]?.children[0].text}</h2>
       <h2 className='text-[11px] text-gray-500 flex gap-2 mt-2 items-center'>{product?.instantDelivery ? <BadgeCheck className='w-5 h-5 text-green-500' /> : <AlertOctagon />} Eligible For Instant Delivery</h2>
       <h2 className='text-[24px] text-primary mt-2'>$ {product?.price}</h2>
   
       <button onClick={hundleAddToCart} className='flex gap-2 p-2 text-white rounded-lg bg-primary hover:bg-teal-600'><ShoppingCart /> Add To Cart</button>
     </div>) : <SkeletonProductInfo />}
   </div>
 

  )
}

export default ProductInfo
