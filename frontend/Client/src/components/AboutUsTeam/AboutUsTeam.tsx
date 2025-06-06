import React from "react";

import "./AboutUsTeam.css";
import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
// import './TeamSlider.css';
import { teamData } from "../../data/aboutUsTeam";

const AboutUsTeam = () => {
  return (
    <>
      <div className="container-fluid" id="AboutUsTeam">
        {/* container */}
        <div className="container AboutUsTeam">
            {/* heading */}
          <div className="aboutusTeam-Heading">
            <div className="aboutusTeam-title">Our Team</div>
            <div className="aboutusTeam-subheading">
              <span className="aboutusTeam-line1">Meet the Passionate </span>
              <span className="aboutusTeam-line2">Team Behind Our Success</span>
            </div>
          </div>

          {/* slider */}
          <div className="aboutusTeam-container">
      <div className="aboutusTeam-slider-wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {teamData.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="aboutusTeam-card">
                <div className="aboutusTeam-img-container">
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    width={200}
                    height={200}
                    className="aboutusTeam-img"
                  />
                </div>
                <div className="aboutusTeam-info">
                  <span className="aboutusTeam-name">{member.name}</span>
                  <span className="aboutusTeam-position">{member.position}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsTeam;
