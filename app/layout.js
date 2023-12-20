import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import { AOSInit } from '@/components/ui/aos'
// import { Providers } from "./GlobalRedux/provider";
import { store } from '@/store';
import StoreProvider from './StoreProvider';
import Footer from '@/components/layout/Footer';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body >
        <StoreProvider>
          <main>
            <Header />
            {children}
            <Footer />

          </main>
        </StoreProvider>

      </body>
    </html>
  )
}
