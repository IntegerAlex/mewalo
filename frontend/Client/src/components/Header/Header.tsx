import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FiMenu,
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
} from 'react-icons/fi';
import { Image } from 'react-bootstrap';
import './Header.css';

import logo from '../../assets/images/logo.png';
import { useCart } from '../../contexts/CartContext';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isCartHovered, setIsCartHovered] = useState(false);
  const { cart, cartCount } = useCart();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle navigation link click
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };


  const mewaloOnClick = () =>{
    navigate('/');
  };
  
  return (
    <header className="header">
      {/* ---------- Top Header ---------- */}
      <div className="header-top">
        <div className="container header-container">
          <div className="contact-info">
            <span>Call Us: +123-456-789</span>
          </div>
          <div className="promo-text">
            <span>
              Sign up and GET 25% OFF for your first order.{' '}
              <Link to="/signup">Sign up now</Link>
            </span>
          </div>
        </div>
      </div>

      {/* ---------- Middle Header ---------- */}
      <div className="header-middle" style={{ backgroundColor: '#FFE34D' }}>
        <div className="header-middle-content">
          {/* Logo Section - Left side */}
          <div className="logo">
            <Image
              src={logo}
              fluid
              style={{ height: '60px', marginRight: '15px' }}
            />
            <span className="logo-text" onClick={mewaloOnClick}>MEWALO</span>
          </div>

          {/* Navigation Links - Center */}
          <nav className="nav-links-middle">
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

          {/* Header Icons - Right side */}
          <div className="header-icons">
            {/* Wishlist Icon */}
            <Link to="/login" className="icon-button">
              <FiHeart size={24} />
            </Link>

            {/* Cart Icon with Dropdown */}
            <div
              className="cart-icon-container"
              onMouseEnter={() => setIsCartHovered(true)}
              onMouseLeave={() => setIsCartHovered(false)}
            >
              <Link to="/cart" className="icon-button">
                <FiShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </Link>

              {/* Cart Dropdown */}
              {isCartHovered && cart.length > 0 && (
                <div className="cart-dropdown">
                  <div className="cart-dropdown-header">
                    <h4>Your Cart ({cartCount})</h4>
                  </div>
                  <div className="cart-dropdown-items">
                    {cart.slice(0, 3).map((item) => (
                      <div key={item.id} className="cart-dropdown-item">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="cart-item-image"
                        />
                        <div className="cart-item-details">
                          <span className="cart-item-name">{item.name}</span>
                          <div className="cart-item-meta">
                            <span className="cart-item-quantity">
                              {item.quantity} × {item.selectedQuantity} kg
                            </span>
                            <span className="cart-item-price">
                              ₹
                              {(
                                item.price *
                                item.selectedQuantity *
                                item.quantity
                              ).toFixed(2)}
                            </span>
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
                          (sum, item) =>
                            sum +
                            item.price *
                              item.selectedQuantity *
                              item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                  <div className="cart-dropdown-footer">
                    <Link to="/cart" className="view-cart-btn">
                      View Cart
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Icon */}
            <Link to="/login" className="icon-button">
              <FiUser size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- Bottom Header (Search Bar) ---------- */}
      <div className="header-bottom">
        <div className="search-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products..."
              style={{ backgroundColor: 'white', color: 'black' , outline:"none", width:"300px"}}
            />
            <button className="search-button">
              <FiSearch size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;