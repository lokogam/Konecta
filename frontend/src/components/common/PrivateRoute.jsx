import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Adjust the path as needed

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useAuth(); // Assuming you have a useAuth hook to check authentication

  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
