import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const token = localStorage.getItem('token');
  console.log(token, "token")
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default AuthGuard;
