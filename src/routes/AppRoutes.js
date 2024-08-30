import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import MoviesPage from '../pages/MoviesPage';

function AppRoutes({openPopup}) {
  return (
    <Routes>
      <Route path="/" element={<HomePage openPopup={openPopup} />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/movies" element={<MoviesPage />} />
    </Routes>
  );
}

export default AppRoutes;
