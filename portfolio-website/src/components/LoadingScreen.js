import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="loading-bubble" style={{ '--index': i }}></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
