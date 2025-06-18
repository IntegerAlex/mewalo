import React from "react";
// import "./MostSelling.css";

import { Button } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "../products/ProductCard";
import { mostSellingData } from "../../data/mostSelling";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const JustForYou = () => {
  const navigate = useNavigate();
  const showShopPage = () => {
    navigate("/shop");
    window.scrollTo(0, 0); // Add scroll to top
  };

  return (
    <div className="container-fluid MostSelling py-4">
      <div className="container mostSelling">
        {/* Most Selling heading */}
        <div className="mostSelling-heading d-flex justify-content-between align-items-center mb-4">
          <h2 className="mostSelling-title m-0">Just for you</h2>
          <div
            className="mostSelliing-seeMore d-flex align-items-center gap-2"
            onClick={showShopPage}
          >
            <Button variant="link" className="mostSelliing-seeMore-btn p-0">
              See More
            </Button>
            <FaArrowRightLong style={{ color: "red", fontSize: "22px" }} />
          </div>
        </div>

        {/* Most Selling Content - Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10} // Reduced space between slides
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: { // Added specific breakpoint for small mobile devices
              slidesPerView: 2,
              spaceBetween: 8,
            },
            576: { // Phones
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: { // Tablets
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: { // Desktops
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {mostSellingData.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard data={[product]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default JustForYou;