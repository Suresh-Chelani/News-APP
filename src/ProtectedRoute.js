import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Assuming you have an AuthContext to provide auth status

const ProtectedRoute = ({ element: Component }) => {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Component />
  ) : (
    <Navigate to="/signin" />
  );
};

export default ProtectedRoute;
