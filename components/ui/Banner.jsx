import Image from 'next/image'
import React from 'react'

export default function 
Banner() {
  return (
    <div className=' px-12 h-[24rem] flex mt-5'>
        <div className='bg-[#fdd2ae] w-full rounded-3xl flex relative overflow-hidden'>
        <div className="bg-[#8d1e23] flex flex-col  justify-center banner_border_radius h-[26rem] relative bottom-[1rem]">
            <div className=' w-[28rem] ms-48 '  data-aos="zoom-in" data-aos-duration="100">  
                <h3 className='text-4xl text-[#ffbd92] font-bold '>GET 10% CASHBACK ON SHOPPING $150</h3>
                <h6 className='text-[#cc837f] my-4'>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</h6>
                <button className='rounded-full bg-[#f9be41] px-5 py-3 font-semibold'>Learn More</button>
            </div>
        </div>
        <div className=" h-full w-3/6 flex  justify-center absolute right-0  flex items-start pt-20" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-out-back" >
<Image src={'/images/spices.png'} width={500} height={500} className=''/>
        </div>
        </div>
    </div>
  )
}

