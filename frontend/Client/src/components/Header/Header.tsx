import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FiMenu,
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiX,
} from 'react-icons/fi';
import { Image } from 'react-bootstrap';
import './Header.css';
import logo from '../../assets/images/logo11-removebg-preview.png';
import { useCart } from '../../contexts/CartContext';
import { Product, products } from '@/data/productData';
// import ProductCard from '../products/ProductCard';
// import { ToastContainer } from 'react-toastify';
// import LOGO from '../../assets/images/LOGO.svg'
import SearchComp from '../SearchComp/SearchComp';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isCartHovered, setIsCartHovered] = useState(false);
   const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { cart } = useCart();
  
  // Calculate the number of unique products in the cart
  const uniqueProductCount = cart.length;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);
    // Scroll to top when any link is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  const mewaloOnClick = () => {
    navigate('/');
    // Scroll to top when logo is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

const toggleSearch = () => {
  setIsSearchVisible(!isSearchVisible);
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
    
    // Reset selected product when search term changes
    setSelectedProduct(null);
  };

  //  const handleProductSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedName = e.target.value;
  //   const product = products.find(p => p.name === selectedName);
    
  //   if (product) {
  //     setSelectedProduct(product);
  //     setSearchTerm(product.name);
  //     setSearchResults([]);
  //   }
  // };

    // Handle search input changes
  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

   // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const searchContainer = document.querySelector('.fixed-search-bar');
      if (isSearchVisible && searchContainer && !searchContainer.contains(e.target as Node)) {
        toggleSearch();
      }
    };

    if (isSearchVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchVisible]);

  return (
    <>

      {/* Header  */}
    <header className="header">
      {/* Top Header */}
      <div className="header-top">
        <div className="container header-container">
          <div className="contact-info">
            <span>Call Us: +123-456-789</span>
          </div>
          <div className="promo-text">
            <span>
              Sign up and GET 25% OFF for your first order.{' '}
              <Link 
                to="/signup" 
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }}
              >
                Sign up now
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* Middle Header */}
      <div className="header-middle">
        <div className="header-middle-content">
          {/* Logo */}
          <div className="logo">
            <Image src={logo} fluid style={{ height: '80px' }} onClick={mewaloOnClick} />
          </div>

          {/* Nav Links */}
          <nav className={`nav-links-middle ${isMenuOpen ? 'open' : ''}`}>
            <Link 
              to="/" 
              className={activeLink === 'Home' ? 'active' : ''} 
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </Link>
            <Link 
              to="/about-us" 
              className={activeLink === 'About Us' ? 'active' : ''} 
              onClick={() => handleLinkClick('About Us')}
            >
              About Us
            </Link>
            <Link 
              to="/shop" 
              className={activeLink === 'Shop' ? 'active' : ''} 
              onClick={() => handleLinkClick('Shop')}
            >
              Shop
            </Link>
            <Link 
              to="/blog" 
              className={activeLink === 'Blog' ? 'active' : ''} 
              onClick={() => handleLinkClick('Blog')}
            >
              Blog
            </Link>
            <Link 
              to="/contact-us" 
              className={activeLink === 'Contact Us' ? 'active' : ''} 
              onClick={() => handleLinkClick('Contact Us')}
            >
              Contact Us
            </Link>
          </nav>

          {/* Icons */}
          <div className="header-icons">
            <Link 
              to="/login" 
              className="login-btn"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >
              LOG IN
            </Link>
            {/* search  */}
              <div 
  className="icon-button" 
  style={{ cursor: 'pointer' }}
  onClick={() => {
    toggleSearch();  // Call your toggleSearch function
    navigate('/search');  // Then navigate to search page
  }}
>
  <FiSearch size={24} />
</div>
              
            {/* wishlist  */}
            <Link 
              to="/wishlist" 
              className="icon-button"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >
              <FiHeart size={24} />
            </Link>

            <div 
              className="cart-icon-container" 
              onMouseEnter={() => setIsCartHovered(true)} 
              onMouseLeave={() => setIsCartHovered(false)}
            >
              <Link 
                to="/cart" 
                className="icon-button"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }}
              >
                <FiShoppingCart size={24} />
                {uniqueProductCount > 0 && <span className="cart-count">{uniqueProductCount}</span>}
              </Link>

              {isCartHovered && cart.length > 0 && (
                <div className="cart-dropdown">
                  <div className="cart-dropdown-header">
                    <h4>Your Cart ({uniqueProductCount})</h4>
                  </div>
                  <div className="cart-dropdown-items">
                    {cart.slice(0, 3).map((item) => (
                      <div key={item.id} className="cart-dropdown-item">
                        <img src={item.img} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                          <span className="cart-item-name">{item.name}</span>
                          <div className="cart-item-meta">
                            <span className="cart-item-quantity">{item.quantity} × {item.selectedQuantity} kg</span>
                            <span className="cart-item-price">₹{(item.price * item.selectedQuantity * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="cart-dropdown-subtotal">
                    <span>Subtotal:</span>
                    <span>
                      ₹
                      {cart
                        .reduce(
                          (sum, item) => sum + item.price * item.selectedQuantity * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                  <div className="cart-dropdown-footer">
                    <Link 
                      to="/cart" 
                      className="view-cart-btn"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        });
                      }}
                    >
                      View Cart
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Menu Toggle for Mobile */}
            <button className="menu-toggle" onClick={toggleMenu}>
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;