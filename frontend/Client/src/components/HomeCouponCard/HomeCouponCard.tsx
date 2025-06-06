import React from 'react'
import { Image } from 'react-bootstrap';
import { FaBoxOpen } from "react-icons/fa";
import img from '../../assets/images/giftRemoveBg.png'
import img2 from '../../assets/images/clockRemoveBg.png'
import { CiCreditCard1 } from "react-icons/ci";

import './HomeCouponCard.css'
const HomeCouponCard = () => {
  return (
    <>
        <div className="container-fluid" id='couponCards'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    
            
                    <div className="couponCards">
                        <div className="couponCard1">
                            <div className="couponCard-left">
                            <div className="coupon-feature">
                                <div className="coupon-feature-img">
                                        <FaBoxOpen />
                                </div>
                                <div className='coupon-feature-title'>
                                        Free Delivery
                                </div>
                            </div>

                            <div className="coupon-feature-description">
                                Get up to 50% off Delivery by 12:15pm
                                Fast and free
                            </div>
                            </div>

                            <div className="couponCard-right">
                                <Image src={img}  fluid/>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="couponCards">
                        <div className="couponCard2">
                            <div className="couponCard2-left">
                            <div className="coupon2-feature">
                                <div className="coupon2-feature-img">
                                        <CiCreditCard1 />
                                </div>
                                <div className='coupon2-feature-title'>
                                       Membership Card
                                </div>
                            </div>

                            <div className="coupon2-feature-description">
                                You can enjoy 5% discount using our health card
                            </div>
                            </div>

                            <div className="couponCard-right">
                                <Image src={img2}  fluid/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeCouponCard