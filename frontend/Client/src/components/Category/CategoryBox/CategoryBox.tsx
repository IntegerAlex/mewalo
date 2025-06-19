import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

import './CategoryBox.css';
import { categories } from '@/data/categories';
import { dryfruitsData } from '@/data/dryfruits';
import { seedsData } from '@/data/seed';
import { berrieData } from '@/data/Berries';
import { nutsData } from '@/data/nuts';
import { datesData } from '@/data/date';

// Type definitions
export interface DryFruit {
  id: string;
  dName: string;
  img: string;
  price: string;
  dPrice: string;
  dDiscount: string;
  dIsStock: boolean;
}

export interface Berry {
  id: string;
  bName: string;
  img: string;
  type: string;
  price: string;
  bDiscount: string;
  bIsStock: boolean;
}

export interface Seed {
  id: string;
  sName: string;
  img: string;
  sType: string;
  price: string;
  sDiscount: string;
  sIsStock: boolean;
}

export interface Nut {
  id: string;
  nName: string;
  img: string;
  price: string;
  nDiscount: string;
  nIsStock: boolean;
}

export interface Date {
  id: string;
  dateName: string;
  img: string;
  price: string;
  dateDiscount: string;
  dateIsStock: boolean;
}

// Centralized category-to-data mapping with proper typing
const categoryDataMap = {
  'Dry Fruits': dryfruitsData,
  'Seeds': seedsData,
  'BERRIES': berrieData,
  'Nuts': nutsData,
  'Dates': datesData
};

const CategoryBox: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const showShopPage = () => {
    navigate('/shop');
  };

  // Helper function to get product name based on category
  const getProductName = (category: string, product: any): string => {
    switch (category) {
      case 'Dry Fruits': return product.name;
      case 'Seeds': return product.name;
      case 'BERRIES': return product.name;
      case 'Nuts': return product.name;
      case 'Dates': return product.name;
      default: return '';
    }
  };

  return (
    <div className="container-fluid">
      <div className="container" id="categoryBoxe-container">
        <div className="category-boxes">
          <div className="category-container">
            {categories.map((category) => {
              const categoryItems = categoryDataMap[category.cName as keyof typeof categoryDataMap] || [];
              
              return (
                <div
                  className="category-card"
                  key={category.cName}
                  
                >
                  <div className="categoryBox">
                    <div className="category-image-container">
                      <img 
                        src={category.cImg} 
                        alt={category.cName} 
                        className="category-image" 
                        onMouseEnter={() => setActiveCategory(category.cName)}
                  onMouseLeave={() => setActiveCategory(null)}
                      />
                    </div>
                    <div className="category-label">{category.cName}</div>
                    
                    {activeCategory === category.cName && (
                      <div className="hover-list-box">
                        <ul>
                          {categoryItems.map((product) => (
                            <li key={product.product_id}>
                              {getProductName(category.cName, product)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="categoery-show-all" onClick={showShopPage}>
          <div className="category-arrow-circle">
            <FaArrowRightLong className="category-arrow-icon" />
          </div>
          <div className="category-show-text">SHOW ALL</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBox;