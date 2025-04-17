// src/pages/WelcomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to ByteBill</h1>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-lg mb-4"
        onClick={() => navigate('/login')}
      >
        Login
      </button>
    </div>
  );
};

export default WelcomePage;
