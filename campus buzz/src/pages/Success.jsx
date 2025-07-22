import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 text-center">
      <div className="bg-green-100 p-8 rounded-lg shadow-md max-w-md">
        <svg
          className="mx-auto h-16 w-16 text-green-500 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">Pass Purchased!</h2>
        <p className="text-gray-600 mb-6">
          Your registration for the event was successful. You can now view your pass anytime.
        </p>

        <Link
          to="/mypasses"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          View My Passes
        </Link>
      </div>
    </div>
  );
};

export default Success;
