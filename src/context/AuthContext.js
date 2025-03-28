import React, { createContext, useState, useContext, useEffect } from 'react';
import { getCurrentAdmin, isAuthenticated } from '../services/authService';

// Create the auth context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        try {
          const adminData = await getCurrentAdmin();
          console.log('Retrieved admin data:', adminData);
          setAdmin(adminData);
        } catch (err) {
          console.error('Failed to fetch admin data', err);
          setError('Authentication failed. Please log in again.');
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  // Value to be provided to consumers
  const value = {
    admin,
    setAdmin,
    isLoading,
    error,
    isAuthenticated: !!admin,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
