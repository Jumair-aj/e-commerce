import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import { PiLightningFill  } from 'react-icons/pi'
import { BiCart } from 'react-icons/bi'
import Image from 'next/image'
import Script from 'next/script'


export default function Header() {
  return (
    <div className='mt-4 '>
      <nav className='mx-12 bg-primaryColor flex px-10 py-4 rounded-2xl justify-between items-center'>
        <div className="flex items-center gap-3">
          <RxHamburgerMenu size={20} color='white' />
          <p className='text-2xl text-white'>Header</p>
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
