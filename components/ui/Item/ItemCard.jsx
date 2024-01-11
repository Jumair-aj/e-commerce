import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function ItemCard({ title, price, image, category, id }) {
  const dispatch = useDispatch()
  const handleCart = () => {
    dispatch(addToCart({
      userId: 5,
      products: [
        {
          id: 1,
          quantity: 1,
        },
        {
          id: 50,
          quantity: 2,
        },
      ]
    })).then(() =>
      dispatch(viewCart())
    )
  }

  return (
    <div className='p-2 '>
      <div className='bg-white rounded-lg text-center mt-5 h-[450px] shadow-md relative'>
        <Link href={String(id)}>
          <div className="flex flex-col  p-8  items-center justify-center">
            <div className='flex h-[180px] justify-center items-center'>
              <Image width={150} height={150} className='max-h-[160px] after:content-[""]' src={image[0]} alt='product images' />
            </div>
            <p className='my-1  mt-5 text-sm text-[#9d9da1]'>{category}</p>
            <h5 className='text-xl my-3 font-semibold text-ellipse'>{title}</h5>
            <p className='text-3xl font-bold'>${price.toFixed(2).split('.')[0]}.<sup>{price.toFixed(2).split('.')[1]}</sup></p>
          </div>
        </Link>
        <button className='w-full bg-primaryColor absolute bottom-0 left-0 rounded-b-lg p-3 text-white' onClick={handleCart}>
          Add to cart
        </button>
      </div>
    </div>
  )
}
