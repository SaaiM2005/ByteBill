// src/pages/AddExpense.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../context/firebase';

const AddExpense = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">ByteBill</h1>

        {/* Dropdown Button and Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown((prev) => !prev)}
            className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            Menu
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50 transform transition-all duration-200 ease-out origin-top-right ${
              showDropdown
                ? 'scale-100 opacity-100'
                : 'scale-95 opacity-0 pointer-events-none'
            }`}
          >
            <ul className="py-1 text-sm text-gray-700">
              <li>
                <button
                  onClick={() => alert('Profile clicked')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                >
                  Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert('Redeem Code clicked')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                >
                  Redeem Code
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center gap-6">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Choose Expense Type
        </h2>

        <div className="flex gap-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg transition duration-200">
            Online Expense
          </button>
          <button
            onClick={() => navigate('/offline-expense')}
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 text-lg transition duration-200"
          >
            Offline Expense
          </button>
        </div>
      </main>
    </div>
  );
};

export default AddExpense;
