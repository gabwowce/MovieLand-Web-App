
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';


function Header({ openPopup }) {
  return (

    <header>
    
    <nav class="navbar container">
        <a class="logo"><Link to="/">Logo</Link></a>
        <div class="menu">
            <ul class="menu-inner">
                <li class="menu-item"><a class="menu-link"><Link to="/">Home</Link></a></li>
                <li class="menu-item"><a class="menu-link"><Link to="/about">About</Link></a></li>
                <li class="menu-item"><a class="menu-link"><Link to="/contact">Contact</Link></a></li>
            </ul>
        </div>
    </nav>
    <h1><span class="review-tag-highlight">Track, rate, and review</span> every film you watch. Organize your movie journey and share insights with others.</h1>
    <a class="header-register"><Link to="/register" onClick={openPopup}>Join for free!</Link></a>
</header>


  );
}

export default Header;
