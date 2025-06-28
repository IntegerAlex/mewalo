import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css'; // We'll create this CSS file next

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"/>
        </svg>
      </div>
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Oops! Page Not Found</h2>
      <p className="not-found-text">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button className="home-button" onClick={() => navigate('/')}>Go To Homepage</button>
    </div>
  );
};

export default PageNotFound;