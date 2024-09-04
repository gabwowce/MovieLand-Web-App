// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import config from '../config';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Patikrina, ar vartotojas yra prisijungęs į puslapį įkrovus
    fetch(`${config.baseURL}/api/current-user`, {
      method: 'GET',
      credentials: 'include', // Įtraukia cookies su užklausomis
    })
      .then(response => response.json())
      .then(data => {
        if (data.user) {
          setUser(data.user);
        }
      });
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch(`${config.baseURL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Įtraukia cookies su užklausomis
      });
      const result = await response.json();

      if (response.ok) {
        setUser(result.user); // Įrašykite vartotojo duomenis į būseną
        return true;
      } else {
        alert(result.message || 'Login failed');
        return false;
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
      return false;
    }
  };

  const register = async (username, email, password) => {
    try {
      const response = await fetch(`${config.baseURL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
        credentials: 'include',
      });
      const result = await response.json();

      if (response.ok) {
        return true;
      } else {
        alert(result.message || 'Registration failed');
        return false;
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
      return false;
    }
  };

  const logout = async () => {
    try {
      await fetch(`${config.baseURL}/auth/logout`, {
        method: 'POST',
        credentials: 'include', // Įtraukia cookies su užklausomis
      });
      setUser(null);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during logout');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(useAuthContext);

export function useAuth() {
  return useContext(AuthContext);
}
