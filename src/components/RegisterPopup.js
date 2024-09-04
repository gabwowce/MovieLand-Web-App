// src/components/RegisterPopup.js
import React, {useState}from 'react';
import { useHeaderContext } from '../context/HeaderContext';
import '../styles/registerPopup.css';
import config from '../config';

function RegisterPopup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { isPopupOpen, closePopup } = useHeaderContext();
  
  if (!isPopupOpen) return null; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
      alert('Passwords do not match!')
      return;
    }
    try{
      const response = await fetch(`${config.baseURL}/auth/register`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          body: JSON.stringify({ username, email, password }),
      });
      const result = await response.json();
    if (response.ok) {
        alert('Registration successful');
        closePopup();
      } else {
        alert(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  }

  return (
   <div class="wrapper">
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div class="input-field">
        <input 
          type="text" 
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Enter your username</label>
      </div>
      <div class="input-field">
        <input 
          type="text" 
          required
          value={email}
          onChange{(e)=> setEmail(e.target.value)}
        />
        <label>Enter your email</label>
      </div>
      <div class="input-field">
        <input 
          type="password" 
          required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <label>Enter your password</label>
      </div>
      <div class="input-field">
        <input 
          type="password" 
          required
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.targer.value)}
        />
        <label>Repeat your password</label>
      </div>
      <button type="submit">Register</button>
      <div class="login">
        <p>Already have an account? <a href="#" onClick={closePopup}>Log In</a></p>
      </div>
    </form>
  </div>

  );
};



export default RegisterPopup;
