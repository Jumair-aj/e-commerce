'use client'

import AddressBox from '@/components/ui/AddressBox/AddressBox'
import CartItem from '@/components/ui/CartItem/CartItem'
import CartSection from '@/components/ui/CartSection/CartSection'
import OrderSummaryBox from '@/components/ui/OrderSummaryBox/OrderSummaryBox'
import { getAllCarts } from '@/store/cartSlice'
import React from 'react'
import { useSelector } from 'react-redux'

export default function page() {
    const product = useSelector(getAllCarts)
    console.log({
        key_id: process.env.RAZORPAY_KEY,
        key_secret: process.env.RAZORPAY_SECRET,
      })
    return (
        <div className='bg-[#f4f6f6]'>
            <div className="px-24 py-12 grid grid-cols-2 gap-6">
                <div className="grid gap-4 ">
                    <AddressBox />
                    <div className="bg-white rounded-xl px-6 py-4">
                        {product?.map((item,i)=>
                            <div className="flex">
                                <p>{item.title}</p>
                                <p>{item.totalPrice}</p>
                            </div>
                            )
                        }
                    </div>
                    <div className=""></div>
                </div>
                <OrderSummaryBox product={product}/>
            </div>
        </div>
    )
}
