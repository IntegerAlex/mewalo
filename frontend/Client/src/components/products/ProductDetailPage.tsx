import React, { useState } from "react";
import "./ProductDetailPage.css";
import productImg from '../../assets/images/almond.png'

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("500g");

  const weights = ["200g", "1 Kg"];

  const handleQuantityChange = (type: "inc" | "dec") => {
    if (type === "inc") setQuantity((prev) => prev + 1);
    if (type === "dec" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="product-detail-container">
      {/* Left Section */}
      <div className="product-image-section">
        <img src={productImg} alt="Green Apple" className="main-image" />
        <div className="thumbnail-container">
          {[1, 2, 3, 4].map((_, index) => (
            <img key={index} src={productImg} alt="Thumb" className="thumbnail" />
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="product-info-section">
        <p className="category">DryFruits</p>
        <h1 className="product-name">Almond</h1>

        {/* <div className="rating">
          ★★★★★ <span className="review-count">(245 Review)</span>
        </div> */}

        <div className="price">
          <span className="discounted">$12.00</span>
          <span className="original">$15.00</span>
        </div>

        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="weight-options">
          <p className="label">Weight</p>
          <div className="weight-buttons">
            {weights.map((w) => (
              <button
                key={w}
                className={`weight-btn ${selectedWeight === w ? "active" : ""}`}
                onClick={() => setSelectedWeight(w)}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        <div className="quantity-and-buttons">
          <div className="quantity-selector">
            <button onClick={() => handleQuantityChange("dec")}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange("inc")}>+</button>
          </div>

          <button className="add-to-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>

        
      </div>
    </div>
  );
};

export default ProductDetailPage;
