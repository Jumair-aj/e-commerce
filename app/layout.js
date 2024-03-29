import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import { AOSInit } from '@/components/ui/aos'
import StoreProvider from './StoreProvider';
import Footer from '@/components/layout/Footer';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className=''>
        <StoreProvider>
          <main className='min-h-screen flex flex-col '>
            <Header />
            {children}
            <Footer />
          </main>
        </StoreProvider>

      </body>
    </html>
  )
}
