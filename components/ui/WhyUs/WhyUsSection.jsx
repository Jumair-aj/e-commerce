import React from 'react'
import WhyUsCard from './WhyUsCard'
import { AiFillAlert } from 'react-icons/ai'

export default function WhyUsSection() {
  return (
    <div className='w-full px-12 mt-16 bg-white'>
        <div className="flex justify-between">
            <WhyUsCard icon={<AiFillAlert size='50'/>} title={'ha'}/>
            <WhyUsCard icon={<AiFillAlert size='50'/>} title={'ha'}/>
            <WhyUsCard icon={<AiFillAlert size='50'/>} title={'ha'}/>
            <WhyUsCard icon={<AiFillAlert size='50'/>} title={'ha'}/>
        </div>
    </div>
  )
}
