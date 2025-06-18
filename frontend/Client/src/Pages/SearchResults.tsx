import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
// import ProductCard from '../components/ProductCard/ProductCard';
import './SearchResults.css';
import ProductCard from '@/components/products/ProductCard';

interface Product {
  product_id: string;
  name: string;
  image: string;
  subcategory: string;
  price: string;
}

const SearchResults: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q') || '';
    setSearchQuery(query);
    
    // Fetch products from API (replace with your actual API call)
    const fetchResults = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        const response = await fetch(`/api/products/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
      setIsLoading(false);
    };

    if (query) {
      fetchResults();
    }
  }, [location.search]);

  return (
    <div className="search-results-page">
      <div className="container">
        <h2 className="search-title">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'Search Products'}
        </h2>
        
        {isLoading ? (
          <div className="loading">Loading results...</div>
        ) : results.length > 0 ? (
          <ProductCard data={results} />
        ) : (
          <div className="no-results">
            <p>No products found matching your search.</p>
            <Link to="/shop" className="browse-btn">
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;