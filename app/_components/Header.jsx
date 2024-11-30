"use client";
import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../_context/CartContext';
import CardApis from '../_utils/CardApis';
import Cart from './Cart';

const Header = () => {
  const {user} = useUser();
  const {cart, setCart} = useCart()
  const [isOpen, setIsOpen] = useState(false)
  useEffect(()=> {
    user && getUserItem()
  }, [user])
  const getUserItem = () => {
    CardApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then((res) => {
      res.data.data.forEach((item) => {
        setCart((oldCart) => [...oldCart, {
          id:item.documentId,
          email:item.email,
          product:item.products[0]
        }])
    })
  })}
  return(
    <header className="bg-white">
    <div className="mx-auto shadow-md flex h-16 w-full items-center gap-8 px-4 sm:px-6 lg:px-8">
      <Link href="/">
      <Image src={'/logo.svg'} alt="logo" width={50} height={50} />
      </Link>
      <div className="flex flex-1 items-center justify-end">
      
  
        <div className="flex items-center gap-4">
          {!user ? 
            <div className="sm:flex sm:gap-4">
            <Link
              className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-600/75"
              href="/sign-in"
            >
              Login
            </Link>
  
            <Link
              className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
              href="/sign-up"
            >
              Register
            </Link>
          </div> : 
          <div className='flex justify-between items-center gap-5'>

            <div onClick={
              () => setIsOpen(!isOpen)
            } className='cursor-pointer flex gap-1 items-center'><ShoppingCart />({cart.length})</div>
            <UserButton afterSignOutUrl='/' />
            {isOpen && <Cart isOpen={isOpen}/>}
            </div>}
          
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
