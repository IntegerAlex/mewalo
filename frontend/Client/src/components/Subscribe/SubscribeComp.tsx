import React, { FormEvent } from 'react'
import * as yup from 'yup'
// import subscribeBg from '../../assets/images/subscribeBg.png'
import './SubscribeComp.css'

const SubscribeComp = () => {
    const subscribeFormSchema =yup.object().shape({
        subscribeInput: yup.string().email('Invalid email').required('Email is required'),
    })

    const handleSubscribe = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        let form = e.currentTarget;
        let formData = new FormData(form);
        let formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj)
    }

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
                <form className="subscribe-input-div" onSubmit={handleSubscribe}>
                    <input className='subscribe-input' name='subscribeInput' type="text" placeholder='Enter Email Address' />
                    <button className='subscribe-button'>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default SubscribeComp