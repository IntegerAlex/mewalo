import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaArrowLeftLong, FaArrowRight } from 'react-icons/fa6';
import './HomeBg.css';

import slideBgImg1 from '../../assets/images/LOGO.svg';
import slideBgImg2 from '../../assets/images/bgImg1.jpg';
import slideBgImg3 from '../../assets/images/shopBanner11.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const slides = [
  {
    img: slideBgImg1,
    heading: 'Fuel Your Day with Nature\'s Energy – Dry Fruits at Their Best!',
  },
  {
    img: slideBgImg2,
    heading: 'Wholesome & Healthy – Experience the Dry Fruit Goodness.',
  },
  {
    img: slideBgImg3,
    heading: 'Purely Picked, Naturally Packed – Premium Dry Fruits for You.',
  },
];

const HomeBg: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="home-slider-container">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="home-swiper"
        onSwiper={(swiper) => {
          // Update navigation after swiper initialization
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img 
                src={slide.img} 
                alt={`Slide ${index + 1}`}
                className="slide-image"
              />
              <div className="slide-text">
                <div>{slide.heading}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      {/* <div className="slider-navigation">
        <div className="slider-arrow prev" ref={prevRef}>
          <FaArrowLeftLong />
        </div>
        <div className="slider-arrow next" ref={nextRef}>
          <FaArrowRight />
        </div>
      </div> */}
    </div>
  );
};

export default HomeBg;