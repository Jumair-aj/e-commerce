import React from 'react'

export default function Loader() {
  return (
    <div className='absolute h-screen w-screen grid place-items-center bg-white top-0 left-0'>
        <div className="w-16   h-16  rounded-full border-8 border-s-[#074c50] border-[#ddd] animate-spin z-20"></div>
    </div>
  )
}
