import Image from 'next/image'
import React from 'react'

export default function 
Banner() {
  return (
    <div className=' px-12 mt-5 h-[22rem] flex'>
        <div className='bg-[#fdd2ae] w-full rounded-3xl flex relative overflow-hidden'>
        <div className="bg-[#8d1e23] h-full flex flex-col items-center justify-center banner_border_radius ">
            <div className=' w-3/5'  data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-out-back" data-aos-delay='100'>  
                <h3 className='text-4xl text-[#ffbd92] font-bold '>GET 10% CASHBACK ON SHOPPING $150</h3>
                <h6 className='text-[#cc837f] my-4'>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</h6>
                <button className='rounded-full bg-[#f9be41] px-5 py-3 font-semibold'>Learn More</button>
            </div>
        </div>
        <div className=" h-full w-3/6 flex items-end justify-center absolute right-0" data-aos="zoom-in" data-aos-delay='100' data-aos-easing="ease-out-back" >
<Image src={'/images/spices.png'} width={650} height={500} className='rotate-180 '/>
        </div>
        </div>
    </div>
  )
}

