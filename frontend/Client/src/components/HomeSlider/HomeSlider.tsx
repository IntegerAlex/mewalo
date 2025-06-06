import React from "react";
import { Image } from "react-bootstrap";

import HomesliderImg1 from "../../assets/images/HomeSliderCard.jpg";
import HomesliderImg2 from "../../assets/images/HomeSliderCard2.png";
import HomesliderImg3 from "../../assets/images/HomeSliderPhone.jpg";
import './HomeSlider.css'


const HomeSliderData = [
  {
    offerText: "Order and Collect",
    Sliderimg: HomesliderImg1,
  },
  {
    offerText: "Pay Your tabby invoice",
    Sliderimg: HomesliderImg2,
  },
  {
    offerText: "Pay Digitally",
    Sliderimg: HomesliderImg3,
  },
];

const HomeSlider = () => {
  return (
    <>
    {/* <span>Our Products </span> */}

    {/* <div className="homeslider">
      <div className="homeslider-heading">
        <div className="homeslider-title">
          We always provide you the best in town
        </div>
        <div className="homeslider-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos vero
          beatae distinctio dolorum modi obcaecati nisi delectus animi
          similique autem!
        </div>
      </div>

      <div className="homeslider-swiper d-flex gap-3 flex-wrap">
        {HomeSliderData.map((item, index) => (
          <div className="homeslider-item border rounded p-3" key={index}>
            <div className="homeslider-offer fw-bold mb-2">
              {item.offerText}
            </div>
            <div className="homeslider-img">
              <Image src={item.Sliderimg}  className="homeslider-img" fluid />
            </div>
          </div>
        ))}
      </div>
    </div> */}

    <div className="container-fluid HomePageSlider">
        <div className="container">

            <div className="blog-item">
                <div className="blog-img">

                </div>
                <div>
                    
                </div>
            </div>
        </div>
    </div>

    </>
  );
};

export default HomeSlider;
