import React from 'react'

import './Testimonial.css'
import { Image } from 'react-bootstrap'

const Testimonial = () => {
  return (
    <>
        {/* <div className="container-fluid" id='Testimonial'>
            <div className="container Testimonial">
                <div className="testimonial-wrapper">
                    <div className="testimonial-card">
                        <div className="testimonial-img">
                            <Image src={} fluid/>
                        </div>
                    </div>
                </div>
            </div>  
        </div> */}

<div className="container-fluid" id='Testimonial'>
    <div className="container Testimonial">
                    <div className="center">
      <input type="checkbox" name="" id="toggle" />

      <label htmlFor="toggle" className="accordion">
        <div className="right">
          <div className="text">
            <div className="heading">About</div>
                <div className='testimonial-name'>
                    Raj Mehta
                </div>
                <div className="testimonial-profession">
                    Manager
                </div>

          </div>
        </div>

        <div className="left">
          <div className="front">
            <div className="bind"></div>
          </div>
          <div className="back"></div>
        </div>
      </label>
    </div>
    </div>
</div>

    </>
  )
}

export default Testimonial