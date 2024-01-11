import ProductDetails from '@/components/ui/ProductDetails/ProductDetails'
import React from 'react'

export default function page({params}) {
  return (
    <div className={'bg-[#fff]'}>
        <ProductDetails params={params}/>
    </div>
  )
}
