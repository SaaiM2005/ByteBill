// src/routes/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../context/firebase';
import { useState, useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setCheckingStatus(false);
    });

    return () => unsubscribe(); // Cleanup
  }, []);

  if (checkingStatus) {
    return <div className="text-center mt-10">Checking auth...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
