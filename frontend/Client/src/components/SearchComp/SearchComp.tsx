import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import LOGO from '../../assets/images/LOGO.svg';
// import { Product, products } from '@/data/productData';
import ProductCard from '../products/ProductCard';
import { Product, products } from '@/data/productData';

interface ProductCardProps {
  data: Product[]; // Should match the Product interface
  limit?: number;
}

const SearchComp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const navigate = useNavigate();

  const handleCloseSearch = () => {
    navigate('/');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.length > 0) {
      const results = products.filter(product => 
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="fixed-search-bar">
      <div className="search-header">
        <div className="search-container">
          <FiSearch size={24} className="search-icon" />
          <input 
            type="text"
            placeholder="Search products..." 
            className="search-input"
            autoFocus
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button 
            className="close-search" 
            onClick={handleCloseSearch}
          >
            <FiX size={24} />
          </button>
        </div>
      </div>
      
      <div className="divider"></div>
      
      <div className="search-results-container">
        {searchResults.length > 0 ? (
          <div className="search-results-grid">
            {searchResults.map(product => (
              <div key={product.product_id} className="product-card-wrapper">
                <ProductCard data={[product]} />
              </div>
            ))}
          </div>
        ) : searchTerm.length > 0 ? (
          <div className="no-results">No products found</div>
        ) : (
          <div className="start-searching">
            <Image src={LOGO} fluid/>
            Start typing to search for products
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchComp;