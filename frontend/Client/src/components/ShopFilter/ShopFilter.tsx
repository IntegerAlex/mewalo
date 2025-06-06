import React, { useState } from 'react';
import './ShopFilter.css';
import { dryfruitsData } from '@/data/dryfruits';
import { berrieData } from '@/data/Berries';
import { nutsData } from '@/data/nuts';
import { seedsData } from '@/data/seed';
import { datesData } from '@/data/date';
import { products } from '@/data/productData';
import ProductCard from '../products/ProductCard';
import { mostSellingData } from '@/data/mostSelling';

const ShopFilter = () => {
  // Create a mapping of category names to their data
  const categoryDataMap = {
    'ALL': products,
    'DryFruits': dryfruitsData,
    'Seeds': seedsData,
    'Nuts': nutsData,
    'Berries': berrieData,
    'Dates': datesData,
    'mostSelling': mostSellingData
  };

  // Initialize state with mostSellingData
  const [filterData, setFilterData] = useState(mostSellingData);

  const changeFilter = (category) => {
    // Get the corresponding data from our map
    const selectedData = categoryDataMap[category] || mostSellingData;
    setFilterData(selectedData);
  };

  return (
    <div className="container-fluid" id='ShopFilter'>
      <div className="container ShopFilter">
        {/* Filter Part */}
        <div className='Filters'>
          <div className='category-filter'>
            {/* category */}
            <div>
              Categories
              <ul>
                <li onClick={() => changeFilter('ALL')}>ALL</li>
                <li onClick={() => changeFilter('DryFruits')}>DryFruits</li>
                <li onClick={() => changeFilter('Seeds')}>Seeds</li>
                <li onClick={() => changeFilter('Nuts')}>Nuts</li>
                <li onClick={() => changeFilter('Berries')}>Berries</li>
                <li onClick={() => changeFilter('Dates')}>Dates</li>
              </ul>
            </div>

            {/* Price */}
            <div>
              price
              <ul>
                <li><input type="radio" name="price" />under 500</li>
                <li><input type="radio" name="price" /> 500 - 1000</li>
                <li><input type="radio" name="price" /> 1000 - 1500</li>
                <li><input type="radio" name="price" /> 1500 - 2000</li>
                <li><input type="radio" name="price" /> 2000 - 2500</li>
              </ul>
            </div>

            {/* other */}
            <div>
              other 
              <ul>
                <li><input type="radio" name="other" />Salted</li>
                <li><input type="radio" name="other" />UnSalted</li>
                <li><input type="radio" name="other" />Choclate</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Products Cards */}
        <div className="filter-product-cards">
          <ProductCard data={filterData} />
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;