import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
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
  return (
    <div className="footer">
      <Container fluid>
        <Row className="footer-row">
          {/* 1. Logo and company info */}
          <Col md={3} sm={12} className="footer-box animate-footer">
            <img src={logo} alt="Logo" className="footer-logo" />
            <ul className="footer-info">
              <li>We provide quality products</li>
              <li>Serving since 2020</li>
              {/* <li>Customer satisfaction is our goal</li> */}
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
            </ul>
          </Col>

          {/* 3. Account Info */}
          <Col md={3} sm={12} className="footer-box animate-footer">
            <h5 className="footer-heading">Account Info</h5>
            <ul className="footer-links">
              <li><Link to="/account">My Account</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/help">Help</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </Col>

          {/* 4. Contact Info */}
          <Col md={3} sm={12} className="footer-box animate-footer">
            <h5 className="footer-heading">Contact</h5>
            <ul className="footer-links">
              <li><FaMapMarkerAlt /> 123 Main Street, Delhi</li>
              <li><FaEnvelope /> contact@company.com</li>
              <li><FaPhoneAlt /> +91-9876543210</li>
            </ul>
            <div className="footer-social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="https://whatsapp.com/channel/0029VbAr6MEC6ZvizpQn2f2k" target="_blank"><FaWhatsapp /></a>
            </div>
          </Col>
        </Row>

        
      </Container>
      {/* <div className="bottom-footer">
        <div className="bottom-footer1">
          <div className="footer-become-seller">
          <IoBagRemoveSharp />
          <div>Become Seller</div>
          </div>
          <div className="footer-become-seller">
            <BsGift />
          <div>Gift Cards</div>
          </div>
          <div className="footer-become-seller">
          <IoMdHelpCircleOutline />
          <div>Help Center</div>
          </div>
          </div>

          <div className="bottom-footer2">
            <div>Term Use</div>
            <div>Privacy Policy</div>
          </div>

          <div className="bottom-footer3">
            All Right reserved by mewalo | 2025
          </div>
        </div> */}
    </div>
  );
};

export default Footer;
