import React from 'react'
import HomeBg from '../components/Homebg/HomeBg'
// import { ProductsPage } from '../components/ProductsPage'
import CategoryBox from '../components/Category/CategoryBox/CategoryBox'
// import ProductCard from '../components/products/ProductCard'
// import ProductCardBox from '../components/products/ProductCardBox'
import HomeAboutUs from '../components/HomeAboutUs/HomeAboutUs'
import MostSelling from '../components/MostSelling/MostSelling'
import HomePageProducts from '../components/HomePageProducts'
import HomeDiscount from '../components/HomeDiscount/HomeDiscount'
import HomeCouponCard from '../components/HomeCouponCard/HomeCouponCard'
// import HomeFeatureStore from '../components/HomeFeatureStore/HomeFeatureStore'
import StayHome from '../components/stayHome/StayHome'
import SubscribeComp from '../components/Subscribe/SubscribeComp'
import JustForYou from '../components/JustForYou/JustForYou'
import FreeShipping from '@/components/FreeShipping/FreeShipping'
import Testimonial from '@/components/testimonials/Testimonial'

const HomePage = () => {
  return (
    <>
      <HomeBg/>
      <CategoryBox/>
      <HomePageProducts/>
      <HomeDiscount/>
      <StayHome/>
      <MostSelling/>
      <Testimonial/>
      <HomeCouponCard/>
      <JustForYou/>
      <FreeShipping/>
      <SubscribeComp/>
      </>
  )
}

export default HomePage