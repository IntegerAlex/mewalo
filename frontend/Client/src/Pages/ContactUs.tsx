import ContactUsBanner from '@/components/contactUsBanner/ContactUsBanner'
import ContactUsDetails from '@/components/contactUsDetails/ContactUsDetails'
import ContactUsForm from '@/components/contactUsForm/ContactUsForm'
import ContactusMap from '@/components/contactUsMap/ContactusMap'
import FreeShipping from '@/components/FreeShipping/FreeShipping'
import SubscribeComp from '@/components/Subscribe/SubscribeComp'
import React from 'react'

const ContactUs = () => {
  return (
    <>
      {/* <ContactUsBanner/>
      <ContactUsForm/>
      <ContactUsMap/>
       */}

       <ContactUsBanner/>
       <ContactUsForm/>
       <ContactUsDetails/>
       <ContactusMap/>
       <FreeShipping/>
       <SubscribeComp/>
    </>
  )
}

export default ContactUs