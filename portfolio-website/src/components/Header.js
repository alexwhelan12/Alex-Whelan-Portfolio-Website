import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="time">{currentTime.toLocaleTimeString()}</div>
      <nav>
        <ul className="nav-list">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/projects" className="nav-link">Projects</a></li>
          <li><a href="/contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
