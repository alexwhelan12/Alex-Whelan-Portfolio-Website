import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
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
