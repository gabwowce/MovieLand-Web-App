// src/components/LoginPopup.js
import React, { useState } from 'react';
import { useHeaderContext } from '../context/HeaderContext';
import { useAuthContext } from '../context/AuthContext';
import '../styles/registerPopup.css';

function LoginPopup() {
  const { isPopupOpen, closePopup } = useHeaderContext();
  const { login } = useAuthContext(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isPopupOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await login(email, password); // Naudokite AuthContext prisijungimo funkciją

    if (success) {
      alert('Login successful');
      closePopup();
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-field">
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Enter your email</label>
        </div>
        <div className="input-field">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Enter your password</label>
        </div>
        <button type="submit">Login</button>
        <div className="register">
          <p>Don't have an account? <a href="#" onClick={closePopup}>Register</a></p>
        </div>
      </form>
    </div>
  );
}

export default LoginPopup;
