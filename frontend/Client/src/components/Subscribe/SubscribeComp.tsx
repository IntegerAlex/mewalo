import React from 'react'

// import subscribeBg from '../../assets/images/subscribeBg.png'
import './SubscribeComp.css'

const SubscribeComp = () => {
  return (
    <>
    <div className="container-fluid" id='subscribeNow'>
        <div className="container">
           <div className="subscribe-overlay"></div>
            <div className="subscribe">
                <div className="subscribe-heading">
                    Our Newsletter
                </div>
                <div className='subscibe-text1'>
                Subscribe to Our Newsletter to Get Updates on Our Latest Offers
                </div>
                <div className="subscribe-text2">
                    Get 25% off on your first order just by subscribing to our newsletter
                </div>
                <div className="subscribe-input-div">
                    <input className='subscribe-input' type="text" placeholder='Enter Email Address' />
                    <button className='subscribe-button'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SubscribeComp