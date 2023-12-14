import Image from 'next/image'
import React from 'react'

export default function CategoryBox({category}) {
  return (
    <div>
        <button className="bg-white shadow-lg p-4 rounded-md">
        <h6 className='text-md font-semibold '>{category.toUpperCase()}</h6>
        </button>
    </div>
  )
}
