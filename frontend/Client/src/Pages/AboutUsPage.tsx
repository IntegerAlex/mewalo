import React from 'react'
import SubscribeComp from '../components/Subscribe/SubscribeComp'
import HomeFeatureStore from '../components/HomeFeatureStore/HomeFeatureStore'
import AboutUsBanner from '../components/AboutUsBanner/AboutUsBanner'
import AboutUSContent from '../components/AboutUsContent/AboutUSContent'
import AboutUsContentTwo from '../components/AboutUsContent2/AboutUsContentTwo'
import AboutUsTeam from '../components/AboutUsTeam/AboutUsTeam'
import Testimonial from '@/components/testimonials/Testimonial'
import FreeShipping from '@/components/FreeShipping/FreeShipping'

const AboutUsPage = () => {
  return (
    <>
      <AboutUsBanner/>
      <AboutUSContent/>
      <AboutUsContentTwo/>
      {/* <Testimonial/> */}
      <HomeFeatureStore/>
      <AboutUsTeam/>
      <FreeShipping/>
      <SubscribeComp/>
    </>
  )
}

export default AboutUsPage