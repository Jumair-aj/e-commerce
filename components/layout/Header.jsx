import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

import { AiOutlineSearch } from 'react-icons/ai'
import { PiLightningFill  } from 'react-icons/pi'
import { BiCart } from 'react-icons/bi'
import Image from 'next/image'
import Script from 'next/script'


export default function Header() {
  return (
    <div className=' sticky px-12 pt-6 top-0 z-10 bg-[#f4f6f6] pb-2'>
      <nav className=' bg-primaryColor px-10 flex  py-4 rounded-2xl justify-between items-center w-full '>
        <div className="flex items-center gap-5">
          <RxHamburgerMenu  size={26} color='white' />
          <Image src='/images/logo.png' width={140} height={140}/>
        </div>
        <div className="flex items-center relative">
          <input type='text' placeholder='Search for Grocery, Vegetable, Store or Meat' className='px-5 rounded-full py-[0.7rem] w-[30rem] text-[0.9rem] text-black' />
          <AiOutlineSearch size={23} color='#074c50' className='absolute right-4'/>
        </div>
        <div className='flex items-center gap-4'>
          <div className="flex items-center text-white font-normal">
            <PiLightningFill className='me-1' color='#f9be41'/> Order now and get it within<span className='ms-1 text-[#f9be41]'>15 mins!</span>
          </div>
        <div className='bg-white rounded-full p-2 relative'>
          <BiCart size={25} color='#074c50'/>
          <div className=" flex absolute top-2 right-[7px] bg-red-600 text-white h-3 w-3 text-[8px] rounded-full items-center justify-center">1</div>
        </div>
        <Image width={40} height={40} src={'/images/profile_pic.png'} className='rounded-full border border-dashed border-green-500'/>
        </div>
      </nav>
      
    </div>
  )
}
