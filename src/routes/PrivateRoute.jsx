import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserAccountSelector } from '../redux/selectors/userAccount';

export const PrivateRoute = ({ children }) => {
  const { token } = useSelector(getUserAccountSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};
