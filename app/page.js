import Footer from '@/components/layout/Footer'
import Banner from '@/components/ui/Banner'
import CategorySection from '@/components/ui/Category/CategorySection'
import Items from '@/components/ui/Item/Items'
import React from 'react'

export default function Index() {
  return (
    <div>
      <Banner/>
      <Items type='trending'/>
      <CategorySection/>
      <Items type='Jewelery'/>
      <Items type='Electronics'/>
      <Footer/>
    </div>
  )
}
