import Image from 'next/image'
import React from 'react'

export default function ItemCard() {
    return (
        <div className='p-2'>
        <div className='bg-white  p-8 rounded-lg text-center mt-5'>
            <div className="flex flex-col items-center justify-center">
                <Image width={150} height={150} className='' src={'/images/profile_pic.png'} />
                <h5 className='text-xl mt-5 font-semibold'>Italian Avocado (Process Food)</h5>
                <p className='my-1 text-sm text-[#9d9da1]'>500 gm.</p>
                <p className='text-3xl font-bold'>14.<sup>29$</sup></p>
            </div>
        </div>
        </div>
    )
}
