// src/pages/Checkout.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dummyEventsData } from '../dummyEventsData';

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = dummyEventsData.find((e) => e._id === id);

  if (!event) {
    return <div className="text-center text-gray-500 py-10">Event not found</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful purchase
    navigate('/success');
  };

  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Purchase Pass</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="md:col-span-2 bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">College ID</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="1234567890"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Confirm & Pay
          </button>
        </form>

        {/* Event Summary */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">Event Summary</h3>
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-40 object-cover rounded mb-4"
          />
          <p className="text-gray-800 font-semibold">{event.title}</p>
          <p className="text-sm text-gray-600">{event.location}</p>
          <p className="text-sm text-gray-600 mb-2">{new Date(event.date).toDateString()}</p>
          <p className="text-sm text-gray-700">{event.description.slice(0, 100)}...</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
