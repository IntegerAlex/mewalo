import React from 'react'
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './ContactUsDetails.css'
const ContactUsDetails = () => {
  return (
    <>
        <div className="container-fluid" id='ContactUsDetails'>
            {/* Address  */}
            <div className="contactUs-address">
                <div className="contactUs-address-icon"><IoLocation fontSize="24px"/></div>
                <div className="contactusAdress-title">
                    Address
                </div>
                <div className="contactusAddress-address">
                    Andheri - Kurla Rd, Chakala, Andheri East, Mumbai, Maharashtra 400059
                </div>
            </div>  

            {/* Phone  */}
             <div className="contactUs-phone">
                <div className="contactUs-phone-icon"><FaPhoneAlt fontSize="24px"/></div>
                <div className="contactusPhone-title">
                   Phone
                </div>
                <div className="contactusPhone-number">
                    +91 9876543212
                </div>
            </div>  

            {/* Mail  */}
             <div className="contactUs-mail">
                <div className="contactUs-mail-icon"><MdEmail fontSize="24px"/></div>
                <div className="contactusMail-title">
                    Mail
                </div>
                <div className="contactusMail-address">
                    mewalo.dryfruits@gmail.com
                </div>
            </div>  

        </div>
    </>
  )
}

export default ContactUsDetails