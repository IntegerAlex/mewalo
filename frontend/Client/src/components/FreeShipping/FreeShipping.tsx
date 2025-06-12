import React from 'react'
import { LuPackageCheck } from "react-icons/lu";
import { BsWallet2 } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";
import './FreeShipping.css'

const FreeShipping = () => {
  return (
    <>
     <div className="container-fluid" id='freeShipping'>
    {/* Free Delivery */}
    <div className="free-delivery">
        <div className="delivery-icon">
            <LuPackageCheck className='free-icon' fontSize="48px"/>
        </div>
        <div className="delivery-text">
            <div className='freeDelivery-title'>
                Free Shipping 
            </div>
            <div className="freeDelivery-desc">
                Free Shipping for order above 2000
            </div>
        </div>
    </div>

    {/* Flexible Payment */}
    <div className="flexible-payment">
        <BsWallet2 className='free-icon' fontSize="48px"/>
        <div className="payment-text">
            <div className='flexiblePayment-title'>
                Flexible Payment
            </div>
            <div className="flexiblePayment-desc">
                Multiple secure payment options
            </div>
        </div>
    </div>

    {/* 24 x 7 Support */}
    <div className="support-24x7">
        <FaHeadset className='free-icon' fontSize="48px"/>
        <div className="support-text">
            <div className='support-title'>
                24 x 7 Support 
            </div>
            <div className="support-desc">
                We support online all days 
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default FreeShipping