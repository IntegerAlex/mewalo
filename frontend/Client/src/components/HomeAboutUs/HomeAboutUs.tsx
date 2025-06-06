import React from "react";

import "./HomeAboutUs.css";
import { Button, Image } from "react-bootstrap";
import HomeAboutus from "../../assets/images/Dryfruits-heart.png";

const HomeAboutUs = () => {
  return (
    <>
      {/* HOME ABOUT US */}
      <div className="homeAbooutUs container-fluid">
        <div className="container homeAbooutUs-container">
          <div className="row">
            {/* LEFT SIDE  */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 homeAbooutUs-left">
              <Image src={HomeAboutus} alt="ABOUT US IMG" className="homeAbooutUs-Img" fluid />
            </div>
            {/* RIGHT SIDE */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 homeAbooutUs-right">
              <div className="homeaboutus-content">
                <div className="homeaboutus-content-title">
                    About Us
                </div>
              <div className="homeaboutus-content-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, numquam? Sapiente illum odio non Lorem, ipsum dolor sit amet consectetur adipisicing.
              </div>
              <div className="homeaboutus-content-ul">
                <ul>
                    <li>✔ &nbsp; lorem </li>
                    <li>✔ &nbsp; lorem </li>
                    <li>✔ &nbsp; lorem </li>
                    <li>✔ &nbsp; lorem </li>
                </ul>
              </div>
              <div className="homeaboutus-content-button">
                <Button className="homeaboutus-content-btn">LEARN MORE</Button>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAboutUs;
