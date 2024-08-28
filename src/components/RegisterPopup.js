// src/components/RegisterPopup.js
import React from 'react';
import { useHeaderContext } from '../context/HeaderContext';

function RegisterPopup() {
  const { isPopupOpen, closePopup } = useHeaderContext();
  if (!isPopupOpen) return null; 

  return (
    <div className="popup" style={styles.overlay}>
      <div className="popup-content" style={styles.popup}>
        <button style={styles.closeButton} onClick={closePopup}>X</button>
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
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    width: '300px',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default RegisterPopup;
