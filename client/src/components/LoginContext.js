import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  // Initialize state based on localStorage
  const [isLogged, setIsLogged] = useState(localStorage.getItem('isLogged') === 'true');

  useEffect(() => {
    // Synchronize state with localStorage
    localStorage.setItem('isLogged', isLogged);
  }, [isLogged]);

  // Login function
  const login = () => {
    setIsLogged(true);
  };

  // Logout function
  const logout = () => {
    setIsLogged(false);
    localStorage.removeItem('isLogged');
  };

  return (
    <LoginContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
