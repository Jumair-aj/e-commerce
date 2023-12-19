import React from 'react'
import WhyUsCard from './WhyUsCard'
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment,MdOutlineSupportAgent  } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";

export default function WhyUsSection() {
  return (
    <div className='w-full px-12 mt-16 bg-white'>
        <div className="flex justify-between">
            <WhyUsCard icon={<FaShippingFast  size='60' className='font-thin'/>} title={'Free Shipping'} desc='On order over $149'/>
            <WhyUsCard icon={<MdOutlinePayment  size='60' className='font-thin'/>} title={'Quick Payment'} desc='Online quick payment'/>
            <WhyUsCard icon={<CiShoppingCart  size='60' className='font-thin'/>} title={'Easy Return'} desc='Return within 24 hours'/>
            <WhyUsCard icon={<MdOutlineSupportAgent  size='60' className='font-thin'/>} title={'24/7 Support'} desc='Customer online support'/>
        </div>
    </div>
  )
}
