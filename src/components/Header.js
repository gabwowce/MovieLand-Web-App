
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ openPopup }) {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/register" onClick={openPopup}>Register</Link></li>
        </ul>
      </nav>
    </header>

  );
}

export default Header;
