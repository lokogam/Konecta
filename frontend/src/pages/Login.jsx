import React from 'react';
import { Navigate } from 'react-router-dom'; // Change Redirect to Navigate
import { useAuth } from '../hooks/useAuth';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />; // Use Navigate instead of Redirect
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
