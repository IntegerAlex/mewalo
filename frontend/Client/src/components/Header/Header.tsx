

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

import logo from '../../assets/images/logo11-removebg-preview.png';
import { useCart } from '../../contexts/CartContext';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isCartHovered, setIsCartHovered] = useState(false);
  const { cart } = useCart();
  
  // Calculate the number of unique products in the cart
  const uniqueProductCount = cart.length;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const mewaloOnClick = () => {
    navigate('/');
  };

  return (
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
              <Link to="/signup">Sign up now</Link>
            </span>
          </div>
        </div>
      </div>

      {/* Middle Header */}
      <div className="header-middle">
        <div className="header-middle-content">
          {/* Logo */}
          <div className="logo">
            <Image src={logo} fluid style={{ height: '80px'}}  onClick={mewaloOnClick}/>
          </div>

        

          {/* Nav Links */}
          <nav className={`nav-links-middle ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className={activeLink === 'Home' ? 'active' : ''} onClick={() => handleLinkClick('Home')}>
              Home
            </Link>
            <Link to="/about-us" className={activeLink === 'About Us' ? 'active' : ''} onClick={() => handleLinkClick('About Us')}>
              About Us
            </Link>
            <Link to="/shop" className={activeLink === 'Shop' ? 'active' : ''} onClick={() => handleLinkClick('Shop')}>
              Shop
            </Link>
            <Link to="/blog" className={activeLink === 'Blog' ? 'active' : ''} onClick={() => handleLinkClick('Blog')}>
              Blog
            </Link>
            <Link to="/contact-us" className={activeLink === 'Contact Us' ? 'active' : ''} onClick={() => handleLinkClick('Contact Us')}>
              Contact Us
            </Link>
          </nav>

          {/* Icons */}
          <div className="header-icons">
            <Link to="/login" className="login-btn">
              LOG IN
            </Link>
            <Link to="/wishlist" className="icon-button"><FiHeart size={24} /></Link>


            <div className="cart-icon-container" onMouseEnter={() => setIsCartHovered(true)} onMouseLeave={() => setIsCartHovered(false)}>
              <Link to="/cart" className="icon-button">
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
                    <Link to="/cart" className="view-cart-btn">View Cart</Link>
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
  );
};

export default Header;