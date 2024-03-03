// components/NavBar/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/values">Our Values</Link></li>
        <li><Link to="/team">Our Team</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
