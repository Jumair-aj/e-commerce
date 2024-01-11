'use client'

import React from 'react'
import CartItem from '../CartItem/CartItem'
import CartTotal from '../CartItem/CartTotal'
import { getAllCarts } from '@/store/cartSlice'
import { useSelector } from 'react-redux'

export default function CartSection() {
    const product = useSelector(getAllCarts)
    console.log('product', product)
    return (
        <div className='p-12'>
            <div className="px-12">
                <h4 className='text-2xl font-medium mb-4'>Shopping Cart</h4>
                {product && <div className="grid grid-cols-[3fr_1fr] gap-6 ">
                    <div className="">
                        {product?.map((item,i)=>
                            <CartItem item={item} key={i}/>
                            )
                        }
                    </div>
                    <CartTotal product={product}/>
                </div>}
            </div>
        </div>
    )
}

