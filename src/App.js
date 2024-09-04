import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import RegisterPopup from './components/RegisterPopup';
import './styles/main.css';
import { HeaderProvider } from './context/HeaderContext';
import {ScrollProvider} from './context/ScrollContext';
import { MoviesProvider } from './context/MoviesContext';
import { AdProvider } from './context/AdContext';
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <ScrollProvider>
      <AuthProvider>
       <Router>
          <HeaderProvider>
            <Header/> 
            <RegisterPopup/>
          </HeaderProvider>
          <MoviesProvider>
            <AdProvider>
              <AppRoutes/> 
            </AdProvider>
          </MoviesProvider>
          <Footer />
        </Router>
      </AuthProvider>
    </ScrollProvider>
   
  );
}

export default App;
