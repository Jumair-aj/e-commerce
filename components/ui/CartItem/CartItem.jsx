'use client'

import { addToCart, removeFromCart } from '@/store/cartSlice';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { useDispatch } from 'react-redux';

export default function CartItem({ item }) {
    const [quantity, setQuantity] = useState(item.quantity)
    const dispatch = useDispatch()
    useEffect(() => {
        (quantity != item.quantity && quantity !== 0) && dispatch(addToCart({ ...item, quantity }))
    }, [quantity])

    const handleCart = (qty) => {
        qty == 'add' ? setQuantity(prev => prev + 1) : quantity == 1 ? (dispatch(removeFromCart(item)),setQuantity(0)): setQuantity(prev=>prev-1);
    }
    return (
        <div className='bg-[#f5f6f7] p-6 rounded-lg mb-4'>
            <div className="grid grid-cols-[1fr_3fr_1fr] items-center">
                <div className="h-32 w-32 overflow-hidden flex items-center">
                    <Image src={item?.images[0]} width={150} height={150} className='' />
                </div>
                <div className="flex flex-col">
                    <h6 className='text-xl font-semibold'>{item?.brand} {item?.title}</h6>
                    <p className='font-normal text-sm text-gray-500 mb-2'>{item?.category?.charAt(0).toUpperCase()}{item?.category.slice(1)}</p>
                    <div className="flex items-center gap-3 font-bold">
                        <button onClick={() => handleCart('remove')}>
                            <FiMinusCircle color='#03563e' size={20} />
                        </button>
                        <p className='text-[#03563e] text-2xl'>{item?.quantity}</p>
                        <button onClick={() => handleCart('add')}>
                            <FiPlusCircle color='#03563e' size={20} />
                        </button>
                    </div>
                </div>
                <p className='text-2xl font-bold'>${(item?.totalPrice).toFixed(2)}</p>

            </div>
        </div>
    )
}
