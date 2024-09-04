import React, {useState}from 'react';
import { useHeaderContext } from '../context/HeaderContext';
import '../styles/registerPopup.css';
import config from '../config';
import { useAuthContext } from "../context/AuthContext"

function RegisterPopup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { isPopupOpen, closePopup } = useHeaderContext();
  const { register } = useAuthContext();
  
  if (!isPopupOpen) return null; 

 const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const success = await register(username, email, password);

    if (success) {
      alert('Registration successful');
      closePopup();
    }
  };
  
  return (
   <div className="wrapper">
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className="input-field">
        <input 
          type="text" 
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Enter your username</label>
      </div>
      <div className="input-field">
        <input 
          type="text" 
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label>Enter your email</label>
      </div>
      <div className="input-field">
        <input 
          type="password" 
          required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <label>Enter your password</label>
      </div>
      <div className="input-field">
        <input 
          type="password" 
          required
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.targer.value)}
        />
        <label>Repeat your password</label>
      </div>
      <button type="submit">Register</button>
      <div className="login">
        <p>Already have an account? <a href="#" onClick={closePopup}>Log In</a></p>
      </div>
    </form>
  </div>

  );
};



export default RegisterPopup;