import React from 'react'
import { useCart } from '../_context/CartContext';
import Link from 'next/link';

const Cart = ({isOpen}) => {
  const {cart} = useCart()
  console.log(cart)
  return (
    <div className='max-h-[300px] w-[270px]
    bg-gray-100 z-10 rounded-md border shadow-sm
    absolute mx-10 right-10 top-12 p-5 overflow-auto'>
      <div className="mt-4 space-y-6">
				<ul className="space-y-4">
					{cart?.map((item) => (
						<li key={item?.id} className="flex items-center gap-4">
							<img
								src={item?.product?.image[0].url}
								alt=""
								className="object-cover w-16 h-16 rounded"
							/>

							<div>
								<h3 className="text-sm text-gray-900 line-clamp-1">{item?.product?.title}</h3>

								<dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
									<div>
										<dt className="inline">Category:</dt>
										<dd className="inline">{item?.product?.category}</dd>
									</div>

									<div>
										<dt className="inline">Price:</dt>
										<dd className="inline">{item?.product?.price}</dd>
									</div>
								</dl>
							</div>
						</li>
					))}



				</ul>
			</div>
      <div className="mt-5 space-y-4 text-center">


				<Link
					href="/cart"
					className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
				>
					View my cart ({cart?.length})
				</Link>

				<a
					href="#"
					className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
				>
					Continue shopping
				</a>
			</div>
    </div>
  )
}

export default Cart
