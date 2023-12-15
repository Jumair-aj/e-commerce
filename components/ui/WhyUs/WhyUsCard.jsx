import React from 'react'

export default function WhyUsCard({icon,title}) {
  return (
    <div className='flex flex-col justify-center items-center p-8'> 
        <div className="icon ">
        {icon}
        </div>
        <h5 className='text-xl mt-3'>{title}</h5>
    </div>
  )
}
