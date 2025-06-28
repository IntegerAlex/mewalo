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
                   F-41/308, PHASE 2 T P NAGAR, LUCKNOW, UP 226006
                </div>
            </div>  

            {/* Phone  */}
             <div className="contactUs-phone">
                <div className="contactUs-phone-icon"><FaPhoneAlt fontSize="24px"/></div>
                <div className="contactusPhone-title">
                   Phone
                </div>
                <div className="contactusPhone-number">
                    +91-73989 95141/ 77388 40135
                </div>
            </div>  

            {/* Mail  */}
             <div className="contactUs-mail">
                <div className="contactUs-mail-icon"><MdEmail fontSize="24px"/></div>
                <div className="contactusMail-title">
                    Mail
                </div>
                <div className="contactusMail-address">
                    mewalofoods@gmail.com
                </div>
            </div>  

        </div>
    </>
  )
}

export default ContactUsDetails