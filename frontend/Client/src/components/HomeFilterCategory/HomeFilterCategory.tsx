import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
// import Filtertabs from '../FilterTabs/Filtertabs';
import ProductCard from '../products/ProductCard';
import './HomeFilterCategory.css'
const HomeFilterCategory = () => {

  
  return (
    <>
      <div className="container-fluid" id='HomeFilterCategory'>
        <div className="container HomeFilterCategory-heading">
            <div className='HomeFilterCategory-title'>
              Weekly best selling item
            </div>
            <div className='HomeFilterCategory-showmore'>
              <div>See more</div>
              <FaArrowRightLong />
            </div>
        </div>
        <div className="container HomeFilterCategory">
            {/* <Filtertabs/> */}

            <div className='HomeFilterCategory-content'>
                {/* <ProductCard /> */}
            </div>
        </div>

      </div>
    </>
  )
}

export default HomeFilterCategory