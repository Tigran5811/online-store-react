import React, { useEffect, useState } from 'react';
import { Provider } from './index';

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  });

  const handleLogOut = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const handleLogIn = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    setToken(token);
  };

  return (
    <Provider value={{
      token,
      handleLogOut,
      handleLogIn,
    }}
    >
      {children}
    </Provider>
  );
};
