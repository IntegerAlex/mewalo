import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa6";
import { SiPaytm } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { IoBagRemoveSharp } from "react-icons/io5";
import { BsGift } from "react-icons/bs";
import { IoMdHelpCircleOutline } from "react-icons/io";
import logo from '../../assets/images/logo11-removebg-preview.png'
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  // Function to handle link clicks with scroll to top
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="footer">
      <Container fluid>
        <Row className="footer-row">
          {/* 1. Logo and company info */}
          <Col md={3} sm={12} className="footer-box animate-footer">
            <img 
              src={logo} 
              alt="Logo" 
              className="footer-logo" 
              onClick={() => {
                navigate('/');
                handleLinkClick();
              }}
              style={{ cursor: 'pointer' }}
            />
            <ul className="footer-info">
              <li>We provide quality products</li>
              <li>Serving since 2020</li>
            </ul>
            <div className="footer-payment">
              <a href="#"><FaCcVisa className="footer-payment-icon" fontSize={32}/></a>
              <a href="#"><FaCcAmazonPay className="footer-payment-icon" fontSize={32}/></a>
              <a href="#"><FaApplePay className="footer-payment-icon" fontSize={32}/></a>
              <a href="#"><SiPaytm className="footer-payment-icon" fontSize={32}/></a>
            </div>
          </Col>

          {/* 2. Active Links */}
          <Col md={3} sm={12} className="footer-box animate-footer">
            <h5 className="footer-heading">Active Links</h5>
            <ul className="footer-links">
              <li>
                <Link 
                  to="/" 
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about-us" 
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/shop" 
                  onClick={handleLinkClick}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact-us" 
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Col>

          {/* 3. Account Info */}
          <Col md={3} sm={12} className="footer-box animate-footer">
            <h5 className="footer-heading">Account Info</h5>
            <ul className="footer-links">
              <li>
                <Link 
                  to="/account" 
                  onClick={handleLinkClick}
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  onClick={handleLinkClick}
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link 
                  to="/help" 
                  onClick={handleLinkClick}
                >
                  Help
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  onClick={handleLinkClick}
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </Col>

          {/* 4. Contact Info */}
          <Col md={3} sm={12} className="footer-box animate-footer">
            <h5 className="footer-heading">Contact</h5>
            <ul className="footer-links">
              <li><FaMapMarkerAlt /> F-41/308, PHASE 2 T P NAGAR, LUCKNOW, UP 226006 </li>
              <li><FaEnvelope /> 
              {/* <a href="https://mail.google.com/mewalofoods@gmail.com" target="_black" className="footer-links-a"> */}
              mewalofoods@gmail.com
              {/* </a> */}
              </li>
              <li><FaPhoneAlt /> +91-73989 95141/ 77388 40135</li>
            </ul>
            <div className="footer-social">
              <a href="https://www.facebook.com/61577412274360/posts/pfbid02mAn1g6KB3FnfPTYV7LmkRjs5pGUPqBzTd3hcZ4K8R7RiMdUZjzGCFABw5TmDwzMsl/?app=fbl" target="_blank"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="https://www.instagram.com/p/DLFwSRgSjFb/?igsh=cWk1ejZpb2E1ZGZq" target="_blank"><FaInstagram /></a>
              <a href="https://whatsapp.com/channel/0029VbAr6MEC6ZvizpQn2f2k" target="_blank"><FaWhatsapp /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;