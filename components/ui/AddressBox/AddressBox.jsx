import React from 'react'
import { FaEdit, FaMapMarkedAlt } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'

export default function AddressBox() {
    return (
        <div className='bg-white py-4 px-8 rounded-xl'>
            <div className="flex justify-between pt-2 pb-4">
                <h4 className='text-2xl text-primaryColor font-medium'>Delivery Information</h4>
                <button className='text-[#8f2024] flex items-center font-semibold gap-1'>
                    <FaEdit  /> Edit
                </button>
            </div>
            <hr />
            <div className="flex items-center py-4 gap-6" >
                <FaMapMarkedAlt size={50} className='text-primaryColor'/>
                <div className="font-semibold">
                    <p className='text-primaryColor'>Delivery to</p>
                    <p className='text-gray-500 font-normal text-sm'>Address: (+91) 9994 575 544</p>
                    <p className='text-gray-500 font-normal text-sm'>Dhaka, Banasree, Block B, Road:3, Bangladesh</p>
                </div>
            </div>
        </div>
    )
}
