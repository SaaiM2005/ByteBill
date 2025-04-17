import React, { useState } from 'react';

const OfflineExpensePage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      alert(`File "${file.name}" selected!`);
      // Handle file upload logic here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col items-center justify-center px-4">
      {/* Stunning Quote */}
      <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-xl shadow-md max-w-2xl text-center mb-10 animate-fade-in">
        <p className="text-xl md:text-2xl text-green-800 font-semibold italic">
          “Switch to online billing — it’s more than convenience, it’s your
          contribution to a cleaner, greener planet...”
        </p>
      </div>

      {/* Upload Section */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Upload Offline Expense File
        </h2>

        <input
          type="file"
          accept=".pdf,.jpg,.png,.jpeg,.doc,.docx"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default OfflineExpensePage;
