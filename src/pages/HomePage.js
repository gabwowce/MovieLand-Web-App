// src/pages/HomePage.js
import React from 'react';
import '../styles/homePage.css';

function HomePage({ openPopup }) {
  return (
    <section className='home'>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of your website.</p>
    </section>
  );
}

export default HomePage;
