import React from 'react';
import { dummyEventsData } from '../dummyEventsData';

const MyPasses = () => {
  // Simulating purchased passes (can later be replaced with real user data)
  const purchasedEvents = dummyEventsData.slice(0, 2); // Example: First 2 events

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Event Passes</h2>

      {purchasedEvents.length === 0 ? (
        <p className="text-gray-600">You haven't purchased any passes yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {purchasedEvents.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.location}</p>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(event.date).toDateString()}
                </p>
                <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
                  Pass Confirmed
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPasses;
