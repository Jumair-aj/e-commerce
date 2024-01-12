'use client'

import React from 'react'
import { MdVerifiedUser } from 'react-icons/md'
import Button from '../Button/Button'
import Link from 'next/link'

export default function CartTotal({ product }) {
    return (
        <div className='bg-[#f5f6f7]  p-6 rounded-lg mb-4 text-xl flex flex-col h-fit'>
            <div className="flex mb-4">
                <p>Subtotal ({product?.length} item) :</p>
                <p className=' font-bold'>${product?.reduce((a, { totalPrice }) => a + totalPrice, 0 )}</p>
            </div>
            <div className="flex mb-6 gap-1 items-center">
                <MdVerifiedUser size={28} />
                <p className='text-xs'>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
            </div>
            <Link href={'buy'}>
                <Button type={'primary'} size={'lg'} className={'rounded-xl'}>Proceed to checkout</Button>
            </Link>
        </div>
    )
}
