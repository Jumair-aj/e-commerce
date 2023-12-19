import React from 'react'
import WhyUsCard from './WhyUsCard'
import { LiaShippingFastSolid  } from "react-icons/lia";
import { MdOutlinePayment,MdOutlineSupportAgent  } from "react-icons/md";
import { CiShoppingCart,CiCreditCard1  } from "react-icons/ci";

export default function WhyUsSection() {
  return (
    <div className='w-full px-12 mt-16 bg-white'>
        <div className="flex justify-between">
            <WhyUsCard icon={<LiaShippingFastSolid   size='60' className='text-primaryColor'/>} title={'Free Shipping'} desc='On order over $149'/>
            <WhyUsCard icon={<CiCreditCard1   size='60' className='text-primaryColor'/>} title={'Quick Payment'} desc='Online quick payment'/>
            <WhyUsCard icon={<CiShoppingCart  size='60' className='text-primaryColor'/>} title={'Easy Return'} desc='Return within 24 hours'/>
            <WhyUsCard icon={<MdOutlineSupportAgent  size='60' className='text-primaryColor'/>} title={'24/7 Support'} desc='Customer online support'/>
        </div>
    </div>
  )
}
