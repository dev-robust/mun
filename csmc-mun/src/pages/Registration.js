import React from "react";
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg')", // Replace with your background image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Delegate Registration
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Choose your registration type to get started.
        </p>

        {/* Buttons */}
        <div className="space-x-4">
          <button
            onClick={() => navigate('/school-delegation')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
          >
            School Delegation Registration
          </button>
          <button
            onClick={() => navigate('/individual-delegate')}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
          >
            Individual Delegate Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
