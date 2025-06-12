

import React, { useState, useEffect } from 'react';
import './ShopFilter.css';
import { dryfruitsData } from '@/data/dryfruits';
import { berrieData } from '@/data/Berries';
import { nutsData } from '@/data/nuts';
import { seedsData } from '@/data/seed';
import { datesData } from '@/data/date';
import { products } from '@/data/productData';
import ProductCard from '../products/ProductCard';
import { mostSellingData } from '@/data/mostSelling';
import { FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';

// Define a type for your category keys
type CategoryKey = 'ALL' | 'DryFruits' | 'Seeds' | 'Nuts' | 'Berries' | 'Dates' | 'mostSelling';

const ShopFilter = () => {
  // Create a mapping of category names to their data with proper typing
  const categoryDataMap: Record<CategoryKey, any[]> = {
    'ALL': products,
    'DryFruits': dryfruitsData,
    'Seeds': seedsData,
    'Nuts': nutsData,
    'Berries': berrieData,
    'Dates': datesData,
    'mostSelling': mostSellingData
  };

  // Initialize state
  const [filterData, setFilterData] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState<CategoryKey[]>(['ALL']);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleCategoryChange = (category: CategoryKey) => {
    setSelectedCategories(prev => {
      if (category === 'ALL') {
        // If ALL is selected, clear other selections
        return ['ALL'];
      }
      
      // Remove ALL if it's present when selecting other categories
      let newSelection = prev.filter(c => c !== 'ALL') as CategoryKey[];
      
      if (prev.includes(category)) {
        // If category was already selected, remove it
        newSelection = newSelection.filter(c => c !== category);
      } else {
        // Add the new category
        newSelection = [...newSelection, category];
      }
      
      // If nothing is selected, default to ALL
      if (newSelection.length === 0) {
        return ['ALL'];
      }
      
      return newSelection;
    });
  };

  const clearFilters = () => {
    setSelectedCategories(['ALL']);
  };

  useEffect(() => {
    if (selectedCategories.includes('ALL')) {
      setFilterData(categoryDataMap['ALL']);
    } else {
      // Combine data from all selected categories
      const combinedData = selectedCategories.flatMap(category => 
        categoryDataMap[category] || []
      );
      setFilterData(combinedData);
    }
  }, [selectedCategories]);

  return (
    <div className="container-fluid" id='ShopFilter'>
      <div className="container ShopFilter">
        {/* Filter Part */}
        <div className='Filters'>
          <div className='category-filter'>
            {/* Categories Dropdown */}
            <div className="filter-dropdown">
              <div 
                className="dropdown-header" 
                onClick={() => toggleDropdown('categories')}
              >
                <span>Categories</span>
                {openDropdown === 'categories' ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              {openDropdown === 'categories' && (
                <div className="dropdown-content">
                  {Object.entries({
                    'ALL': 'ALL',
                    'DryFruits': 'DryFruits',
                    'Seeds': 'Seeds',
                    'Nuts': 'Nuts',
                    'Berries': 'Berries',
                    'Dates': 'Dates'
                  }).map(([label, value]) => (
                    <label key={value} className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(value as CategoryKey)}
                        onChange={() => handleCategoryChange(value as CategoryKey)}
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Dropdown */}
            <div className="filter-dropdown">
              <div 
                className="dropdown-header" 
                onClick={() => toggleDropdown('price')}
              >
                <span>Price</span>
                {openDropdown === 'price' ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              {openDropdown === 'price' && (
                <div className="dropdown-content">
                  <label className="checkbox-item">
                    <input type="checkbox" name="price" />
                    <span>Under ₹500</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" name="price" />
                    <span>₹500 - ₹1000</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" name="price" />
                    <span>₹1000 - ₹1500</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" name="price" />
                    <span>₹1500 - ₹2000</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" name="price" />
                    <span>₹2000 - ₹2500</span>
                  </label>
                </div>
              )}
            </div>

            {/* Other Dropdown */}
            <div className="filter-dropdown">
              <div 
                className="dropdown-header" 
                onClick={() => toggleDropdown('other')}
              >
                <span>Other</span>
                {openDropdown === 'other' ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              {openDropdown === 'other' && (
                <div className="dropdown-content">
                  <label className="checkbox-item">
                    <input type="checkbox" name="other" />
                    <span>Salted</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" name="other" />
                    <span>UnSalted</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" name="other" />
                    <span>Chocolate</span>
                  </label>
                </div>
              )}
            </div>

            {/* Clear Filters Button */}
            <button 
              className="clear-filters-btn"
              onClick={clearFilters}
            >
              <FiX /> Clear All Filters
            </button>
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