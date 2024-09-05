
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import Logo from './headers-components/logo.js';
import SearchBar from './headers-components/searchBar';
import { useEffect, useState } from 'react';
import { useHeaderContext } from '../context/HeaderContext';
import {useScrollContext} from '../context/ScrollContext';
import SearchIcon from '../assets/search.svg'
import { useAuthContext } from '../context/AuthContext';

function Header() {

  const {user, logout } = useAuthContext();
  
  const { openPopup } = useHeaderContext();
  const { isScrolled } = useScrollContext(); 
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  useEffect(() => {
    const handleReviewGridWidth = () =>{
      const gridContainer = document.getElementsByClassName("header-review")[0];
      const reviewTagHighlight = document.getElementsByClassName("review-tag-highlight")[0];
      if (reviewTagHighlight && gridContainer) {
        // Gaukite elemento plotį
        const reviewTagHighlightWidth = reviewTagHighlight.offsetWidth;
        console.log('Width of review-tag-highlight:', reviewTagHighlightWidth);

        // Pakeiskite grid-container stilių
        gridContainer.style.gridTemplateColumns = `${(reviewTagHighlightWidth / 3)+5}px ${(reviewTagHighlightWidth / 3)+5}px ${(reviewTagHighlightWidth / 3)+5}px`;
      }
    };

    handleReviewGridWidth();

    window.addEventListener('resize', handleReviewGridWidth);

    return () => {
      window.removeEventListener('resize', handleReviewGridWidth);
    };
  }, []);


  useEffect(() => {
    const mobileNav = document.querySelector(".hamburger");
    const navbar = document.querySelector(".menubar");

    const toggleNav = () => {
      mobileNav.classList.toggle("hamburger-active");
      setMenuOpen(prev => !prev);
    };

     if (mobileNav) {
      mobileNav.addEventListener("click", toggleNav);
    }

    return () => {
      if (mobileNav) {
        mobileNav.removeEventListener("click", toggleNav);
      }
    };
  }, []);

  useEffect(() => {
    const navbar = document.querySelector(".menubar");
    if (!navbar) return;

    // Reset all classes first
    navbar.className = "menubar";

    if (isMenuOpen) {
      navbar.classList.add("menubar-active");
    }

    if (isScrolled && isMenuOpen) {
      navbar.classList.add("menubar-active-scrolled");
    }

    console.log('Menubar class names:', navbar.className);
  }, [isScrolled, isMenuOpen]);



  return (
    <header>
      <nav className={`navbar container ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <Logo />
        <SearchBar/>
        <div className="menu">
          <ul className="menu-inner">
            <li className="menu-item"><Link to="/" className="menu-link">Home</Link></li>
            <li className="menu-item"><Link to="/movies" className="menu-link">Movies</Link></li>
            <li className="menu-item"><Link to="/about" className="menu-link">About</Link></li>


            {user ? (
              <li className="menu-item profile-icon">
                <span
                  className="menu-link profile-link"
                  onMouseEnter={() => setProfileMenuOpen(true)}
                  onMouseLeave={() => setProfileMenuOpen(false)}
                >
                  Profile
                </span>
                {isProfileMenuOpen && (
                  <ul className="profile-dropdown-menu">
                    <li><Link to="/profile" className="menu-link">Profile</Link></li>
                    <li><Link to="/movies" className="menu-link">Liked Movies</Link></li>
                    <li><Link to="/comments" className="menu-link">Comments</Link></li>
                    <li><Link to="/settings" className="menu-link">Settings</Link></li>
                    <li><Link to="/" className="menu-link" onClick={logout}>Log Out</Link></li>
                  </ul>
                )}
              </li>
            ) : (
              <li className="menu-item"><Link to="/about" className="menu-link">Log In</Link></li>
            )}
  

          </ul>
        </div>

              
        <div className='navbar-icons'>
            <div className="search-icon">
              <img src={SearchIcon} alt='search icon'/>
            </div>
            <div className="hamburger">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
        </div>    
      </nav>

              
      <div className="menubar">
        <ul>
          <li><Link to="/" className="menu-link">Home</Link></li>
          <li><Link to="/movies" className="menu-link">Movies</Link></li>
          <li><Link to="/about" className="menu-link">About</Link></li>
          {user ? (
            <>
              <li><Link to="/profile" className="menu-link">Profile</Link></li>
              <li><Link to="/movies" className="menu-link">Liked Movies</Link></li>
              <li><Link to="/comments" className="menu-link">Comments</Link></li>
              <li><Link to="/settings" className="menu-link">Settings</Link></li>
              <li><Link to="/" className="menu-link" onClick={logout}>Log Out</Link></li>
            </>
          ) : (
            <li><Link to="/about" className="menu-link">Log In</Link></li>
          )}
        </ul>
      </div>

      {
        user ? (
           <div className='header-review'>
              <h1 className="review-tag-highlight">Welcome back, {user.username}!</h1>
          </div>
        ) : (
           <div className='header-review'>
                <h1 className="review-tag-highlight">Track, rate, and review</h1>
                <h2 className="review-tag">every film you watch. Organize your movie journey and share insights with others.</h2>
                <button className="header-register-btn" onClick={openPopup}>Join for free!</button>
            </div>
        )
      }

    </header>
  );
}

export default Header;
