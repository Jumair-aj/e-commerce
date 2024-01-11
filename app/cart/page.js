'use client'

import CartSection from '@/components/ui/CartSection/CartSection'
import { getAllCarts } from '@/store/cartSlice'
import React from 'react'
import { useSelector } from 'react-redux'

export default function page() {
  return (
    <div>
        <CartSection/>
    </div>
  )
}
