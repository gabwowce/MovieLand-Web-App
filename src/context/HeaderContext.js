// src/contexts/HeaderContext.js
import React, { createContext, useState, useContext } from 'react';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <HeaderContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => useContext(HeaderContext);

export default HeaderContext;
