// src/components/RegisterPopup.js
import React from 'react';
import { useHeaderContext } from '../context/HeaderContext';
import '../styles/registerPopup.css';

function LoginPopup() {
  const { isPopupOpen, closePopup } = useHeaderContext();
  if (!isPopupOpen) return null; 

  return (
    <div class="wrapper">
    <form action="#">
      <h2>Login</h2>
        <div class="input-field">
        <input type="text" required/>
        <label>Enter your email</label>
      </div>
      <div class="input-field">
        <input type="password" required/>
        <label>Enter your password</label>
      </div>
      <div class="forget">
        <label for="remember">
          <input type="checkbox" id="remember"/>
          <p>Remember me</p>
        </label>
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit">Log In</button>
      <div class="register">
        <p>Don't have an account? <a href="#">Register</a></p>
      </div>
    </form>
  </div>
  );
};



export default LoginPopup;
