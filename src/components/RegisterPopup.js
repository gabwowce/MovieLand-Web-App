// src/components/RegisterPopup.js
import React from 'react';
import { useHeaderContext } from '../context/HeaderContext';
import '../styles/registerPopup.css';

function RegisterPopup() {
  const { isPopupOpen, closePopup } = useHeaderContext();
  if (!isPopupOpen) return null; 

  return (
    <div className="popup" >
      <div className="popup-content" >
        <button className="x-btn" onClick={closePopup}>X</button>
        <h2>Register</h2>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};



export default RegisterPopup;
