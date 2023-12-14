import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import { AOSInit } from '@/components/ui/aos'
// import { Providers } from "./GlobalRedux/provider";
import { store } from '@/store';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={'bg-[#f4f6f6]'}>
        {/* <Providers store={store}> */}
          <Header />
          {children}
        {/* </Providers> */}
      </body>
    </html>
  )
}
