// src/pages/HomePage.js
import React from 'react';

function HomePage({ openPopup }) {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of your website.</p>
      <button onClick={openPopup}>Register</button>
    </div>
  );
}

export default HomePage;
