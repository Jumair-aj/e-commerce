import React from 'react'

export default function WhyUsCard({icon,title,desc}) {
  return (
    <div className='flex justify-center items-center p-8 gap-3'> 
        <div className="icon ">
        {icon}
        </div>
        <div className="">
        <h5 className='text-xl font-medium '>{title}</h5>
        <p className='text-md '>{desc}</p>
        </div>
    </div>
  )
}
