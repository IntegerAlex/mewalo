import React from 'react'
import './AboutUsContentTwo.css'
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";

const AboutUsContentTwo = () => {
  return (
    <div className="container-fluid" id='AboutUsContentTwo'>
        <div className="container AboutUsContentTwo">
            <div className="visionDiv-img"></div>
            
            <div className="visionDiv-content">
                <div className="vision">
                    <div className="vision-icon">
                        <BsFillRocketTakeoffFill />
                    </div>
                    <div className="vision-title">
                        Our Vision
                    </div>
                    <div className="vision-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis maxime fuga, ipsam laudantium cupiditate doloribus, cum ullam, velit non voluptatem iure id eligendi dignissimos eveniet.
                    </div>
                </div>
                <div className="mission">
                    <div className="mission-icon">
                        <BsEyeFill />
                    </div>
                    <div className="mission-title">
                        Our Mission
                    </div>
                    <div className="mission-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis maxime fuga, ipsam laudantium cupiditate doloribus, cum ullam, velit non voluptatem iure id eligendi dignissimos eveniet.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUsContentTwo