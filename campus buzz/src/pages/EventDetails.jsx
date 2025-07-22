// src/pages/EventDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dummyEventsData } from '../dummyEventsData';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = dummyEventsData.find((e) => e._id === id);

  if (!event) {
    return <div className="text-center text-gray-500 py-10">Event not found</div>;
  }

  const handleBuy = () => {
    navigate(`/checkout/${event._id}`);
  };

  return (
    <div className="bg-white min-h-screen px-6 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-96 object-cover rounded-xl shadow"
        />

        {/* Event Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h2>
          <p className="text-gray-600 mb-2">
            <strong>Date:</strong> {new Date(event.date).toDateString()}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Location:</strong> {event.location}
          </p>
          <p className="text-gray-700 mb-6">{event.description}</p>

          <button
            onClick={handleBuy}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Buy Pass
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
