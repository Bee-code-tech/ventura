// EventCard.js
import React from 'react';

const EventCard = ({ title, image, startDate, endDate, price }) => {
  return (
    <div className="w-[400px] rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image on Top */}
      <img className="w-full h-48 object-cover rounded-t-lg" src={image} alt={title} />
      
      {/* Event Details */}
      <div className="p-4">
        {/* Event Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

        {/* Date Information */}
        <p className="text-gray-600 text-sm">
          <span className="font-medium">Start Date:</span> {new Date(startDate).toLocaleDateString()}
        </p>
        <p className="text-gray-600 text-sm mb-2">
          <span className="font-medium">End Date:</span> {new Date(endDate).toLocaleDateString()}
        </p>

        {/* Price Information */}
        <p className="text-lg font-bold text-indigo-600">${price}</p>
      </div>
    </div>
  );
};

export default EventCard;
