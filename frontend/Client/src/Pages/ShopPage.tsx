import FreeShipping from '@/components/FreeShipping/FreeShipping'
import JustForYou from '@/components/JustForYou/JustForYou'
import ShopBanner from '@/components/ShopBanner/ShopBanner'
import ShopFilter from '@/components/ShopFilter/ShopFilter'
import SubscribeComp from '@/components/Subscribe/SubscribeComp'
import React from 'react'

const ShopPage = () => {
  return (
    <>
      <ShopBanner/>
      <ShopFilter/>
      <JustForYou/>
      <FreeShipping/>
      <SubscribeComp/>
    </>
  )
}

export default ShopPage