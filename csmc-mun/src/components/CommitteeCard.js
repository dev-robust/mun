import React from 'react';
import { Link } from 'react-router-dom';

const CommitteeCard = ({ name, image, agenda }) => {
  return (
    <Link to="/committees">
      <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 
                     group-hover:opacity-100 transition-opacity duration-300"
        >
          <p className="text-white text-center px-4">{agenda}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-70 text-white text-center py-2">
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CommitteeCard;
