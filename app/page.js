import Banner from '@/components/ui/Banner'
import CategorySection from '@/components/ui/Category/CategorySection'
import Items from '@/components/ui/Item/Items'
import WhyUsSection from '@/components/ui/WhyUs/WhyUsSection'
import React from 'react'

export default function Index() {
  return (
    <div className={'bg-[#f4f6f6]'}>
      <Banner/>
      <Items type='trending'/>
      <CategorySection/>
      {/* <Items type='Jewelery'/>
      <Items type='Electronics'/> */}
      <WhyUsSection/>
    </div>
  )
}
