'use client'

import React from 'react'
import ItemCard from './ItemCard'
import ProductSlider from './Slider'

export default function Items() {
    return (
        <div className='mt-5 px-12 text-[#04302e] mb-8'>
            <h3 className='text-3xl font-semibold '>Gromuse / All category</h3>
            <div className="flex justify-between">
                <div className=""></div>
                <div className=""></div>
            </div>
            <div className="">
             <ProductSlider>
                {[...Array(10)].map((i,j)=>
                <ItemCard key={j}/>
                )}
                </ProductSlider>   
            </div>
        </div>
    )
}
