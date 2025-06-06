import React from 'react';
import { Image } from 'react-bootstrap';
import './HomeDiscount.css';
import { discountData } from '../../data/discountInfo';
// import { discountData } from '../../data/discountData';

const HomeDiscount = () => {
  return (
    <div className="container-fluid" id="discount-section">
      <div className="container">
        <div className="discount-grid">
          {discountData.map((discount) => (
            <div className="discount-card" key={discount.id}>
              <div
                className="discount-content"
                style={{ backgroundColor: discount.bgColor1 }}
              >
                <div className="discount-title">{discount.title}</div>
                <div className="discount-percentage">{discount.percentage}</div>
                <div className="discount-text">
                  Enjoy discount on dry fruits and fresh items
                </div>
              </div>
              <div className="discount-card-img-div">
                <Image
                  src={discount.img}
                  alt="product-img"
                  className="discount-card-img"
                  fluid
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDiscount;
