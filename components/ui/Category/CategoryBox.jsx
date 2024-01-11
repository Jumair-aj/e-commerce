import Image from 'next/image'
import React from 'react'

export default function CategoryBox({category}) {
  return (
        <button className="bg-white shadow-lg p-4 rounded-md  w-[90%] ">
        <h6 className='text-md font-semibold  whitespace-nowrap'>{category.toUpperCase()}</h6>
        </button>
  )
}
