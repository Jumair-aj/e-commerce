import { cva } from 'class-variance-authority'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const button = cva(['flex', 'items-center','justify-center',"transition-colors", 'rounded-full','w-full'], {
    variants: {
        type: {
            default: ['bg-[#bcea71]','text-primaryColor'],
            primary: ['bg-primaryColor','text-white'],
            // className=' rounded-xl mx-auto w-full py-2  text-lg'
            light: ['text-primaryColor','border-primaryColor','border-2'],
            tertiary:['text-[#bcea71]','bg-primaryColor']
        },
        size:{
            default:[''],
            sm:['w-fit' , 'py-2', 'px-5'],
            md:[''],
            lg:['p-2','font-semibold', 'text-lg']
        },
    },
    defaultVariants:{
        type: "default",
        size: "default"
    }
})

export default function Button({ children,className, type,size,...props }) {
    return (
        <button className={twMerge(button({type,size}),className)} {...props}>{children}</button>
    )
}