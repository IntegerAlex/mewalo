import React from 'react';
import './StayHome.css';
import img from '../../assets/images/deliveryBoyBgremove.png'

const StayHome = () => {
  return (
    <div className="container-fluid stay-home-section">
      <div className="container">
        <div className="stay-home-content">
          <div className="stay-home-text">
            <h1 className="stay-home-heading">
              Stay Home and Get All<br />
              Your Essentials From<br />
              <span className="market-text">Our Market!</span>
            </h1>
            <p className="download-text">
              Download the app from app store or google play
            </p>
            <div className="download-buttons">
              <a 
                href="https://play.google.com/store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-button google-play"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="store-badge"
                />
              </a>
              <a 
                href="https://www.apple.com/app-store/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-button app-store"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store" 
                  className="store-badge"
                />
              </a>
            </div>
          </div>
          <div className="stay-home-image">
            <img 
              src={img}
              alt="Delivery boy" 
              className="delivery-boy-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayHome;