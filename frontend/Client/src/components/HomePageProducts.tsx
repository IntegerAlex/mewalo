import React from 'react'
import ProductCard from './products/ProductCard'
import {products} from '../data/productData'


const HomePageProducts = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="container">
                <h2 className='text-center'>Our Products</h2>

                <ProductCard data={products} />
            </div>
        </div>
    </>
  )
}

export default HomePageProducts