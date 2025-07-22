// src/pages/Landing.jsx
import React from 'react';
import { assets } from '../assets';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-between">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-16 py-16 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Discover & Join <br /> Exciting College Events
          </h1>
          <p className="text-gray-600 mb-6">
            Book passes, explore campus fests, and never miss an opportunity to connect and celebrate!
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/events"
              className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Browse Events
            </Link>
            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              <img src={assets.googlePlay} alt="Google Play" className="h-6" />
              Download App
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img src={assets.screenImage} alt="App preview" className="max-w-xs md:max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
