import React from 'react';
import './ContactusMap.css';

const ContactusMap = () => {
  return (
    <div className="contact-map-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.781156437064!2d72.8613268!3d19.1150936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ce246611f1%3A0x3e0b82a825ccce33!2sKanakia%20Wall%20Street!5e0!3m2!1sen!2sin!4v1748952203179!5m2!1sen!2sin"
        className="contact-map-iframe"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="Google Maps location"
        title="Kanakia Wall Street Location"
      />
    </div>
  );
};

export default ContactusMap;