import React from 'react';
import './ContactusMap.css';

const ContactusMap = () => {
  return (
    <div className="contact-map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4985197818437!2d80.9350424!3d26.8520525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3babe987d67%3A0x2bfbdd0f5b8c2909!2sF-41%2F308%2C%20T%20P%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226006!5e0!3m2!1sen!2sin!4v1719311184106!5m2!1sen!2sin"
        className="contact-map-iframe"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="Google Maps location"
        title="F-41/308, Phase 2 TP Nagar Lucknow"
      />
    </div>
  );
};

export default ContactusMap;
