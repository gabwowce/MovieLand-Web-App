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

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <ScrollProvider>
      <Router>
        <HeaderProvider>
          <Header/> 
          <RegisterPopup/>
        </HeaderProvider>
        <MoviesProvider>
          <AppRoutes /> 
        </MoviesProvider>
        <Footer />
      </Router>
    </ScrollProvider>
   
  );
}

export default App;
