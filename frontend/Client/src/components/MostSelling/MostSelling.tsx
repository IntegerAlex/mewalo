import React from "react";
import "./MostSelling.css";
import { Button } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "../products/ProductCard";
import { mostSellingData } from "../../data/mostSelling";
import { useNavigate } from "react-router-dom";

const MostSelling = () => {
  const navigate = useNavigate();
  const showShopPage = () => {
    navigate("/shop");
  };
  return (
    <>
      <div className="container-fluid MostSelling py-4">
        <div className="container">
          {/* Most Selling heading */}
          <div className="mostSelling-heading d-flex justify-content-between align-items-center mb-4">
            <h2 className="mostSelling-title m-0">Best Selling</h2>
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

          {/* Most Selling Content */}
          <div className="row">
            <ProductCard data={mostSellingData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MostSelling;
