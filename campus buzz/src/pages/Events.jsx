// src/pages/Events.jsx
import React from 'react';
import { dummyEventsData } from '../dummyEventsData';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dummyEventsData.map((event) => (
          <Link
            to={`/events/${event._id}`}
            key={event._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{event.location}</p>
              <p className="text-sm text-gray-500">{new Date(event.date).toDateString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
