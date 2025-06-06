import React from "react";

import "./AboutUSContent.css";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const AboutUSContent = () => {
  return (
    <>
      <div className="container-fluid" id="AboutUSContent">
        <div className="container AboutUSContent">
          {/* left (video) */}
          <div className="AboutUsContent-left">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dcn664AtF2E?si=-uIlrCAMKtqTOblL"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          {/* right (content) */}
          <div className="AboutUsContent-right">
            <div className="aboutUs-heading">ABOUT US</div>
            <div className="aboutUs-title">
              Your Trusted Partner in Fresh DryFruit Delivery
            </div>
            <div className="aboutUs-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              repudiandae dolore voluptate totam
            </div>
            <div className="aboutUs-ul-div">
              <ul className="aboutUs-ul">
                <li className="aboutUs-li">
                  <FaCheckCircle className="aboutUs-icon" />
                  Fresh and High Quality
                </li>
                <li className="aboutUs-li">
                  <FaCheckCircle className="aboutUs-icon" />
                  Fresh and High Quality
                </li>
                <li className="aboutUs-li">
                  <FaCheckCircle className="aboutUs-icon" />
                  Convenient and reliable delivery
                </li>
              </ul>
            </div>
            <div className="aboutUs-founder">
              TIWARI <AiFillStar color="gold" /> Founder
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUSContent;
