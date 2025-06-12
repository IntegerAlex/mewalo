import { testimonialData } from '@/data/testimonial'
import React from 'react'
import { Image } from 'react-bootstrap'
import { FaQuoteLeft } from 'react-icons/fa'
// import { testimonialData } from '@/data/testimonialData' // adjust path if needed
import './Testimonial.css'
const Testimonial = () => {
  return (
    <>
      <div className="container-fluid" id="testimonial">
        <div className="container testimonial-heading">
           Testimonial
        </div>
        <div className="container testimonial">
          <div className="testimonial-wrapper">
            {testimonialData.slice(0, 3).map((item) => (
              <div className="testimonial-box" key={item.id}>
                <FaQuoteLeft className='testimonial-quote'/>
                <div className="testimonial-p">{item.desc}</div>
                <div className="testimonial-content">
                  <div className="testimonial-info">
                    <div className="testimonial-name">{item.name}</div>
                    <div className="testimonial-profession">{item.profession}</div>
                    {/* <div className="testimonial-rating">{item.rating}</div> */}
                    <div className="testimonial-img">
                      <Image src={item.img} fluid />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
