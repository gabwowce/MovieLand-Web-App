import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import RegisterPopup from './components/RegisterPopup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Router>
      <Header openPopup={openPopup} /> 
      <AppRoutes openPopup={openPopup} /> 
      <Footer />
      <RegisterPopup isOpen={isPopupOpen} onClose={closePopup} />
    </Router>
  );
}

export default App;
