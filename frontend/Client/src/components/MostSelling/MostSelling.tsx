import React from 'react'
import './MostSelling.css'
import { Button } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from '../products/ProductCard';
import {mostSellingData } from '../../data/mostSelling'

const MostSelling = () => {
  return (
    <>
        <div className="container-fluid MostSelling">
            <div className="container">
                {/* Most Selling heading  */}
                <div className='mostSelling-heading'>
                    <div className="mostSelling-title">
                        Most Selling Products
                    </div>
                    <div className="mostSelliing-seeMore">
                        <Button className='mostSelliing-seeMore-btn'>See More </Button>
                        <div>
                            <FaArrowRightLong style={{color:"red", fontSize:"22px"}} />
                        </div>
                    </div>
                </div>

                {/* Most Selling Content  */}
                <ProductCard data={mostSellingData}/>   
            </div>
        </div>
    </>
  )
}

export default MostSelling

