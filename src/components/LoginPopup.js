// src/components/RegisterPopup.js
import React from 'react';
import { useHeaderContext } from '../context/HeaderContext';
import '../styles/registerPopup.css';
import config from '../config';

function LoginPopup() {
  const { isPopupOpen, closePopup } = useHeaderContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  if (!isPopupOpen) return null; 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${config.baseURL}/auth/login`, { // Pakeiskite pagal savo API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();

      if (response.ok) {
        // Galite saugoti JWT į cookies arba localStorage
        alert('Login successful');
        closePopup();
      } else {
        alert(result.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
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
