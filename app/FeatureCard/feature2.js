import React from 'react';

const Feature2 = ({ title, description }) => {
  return (
    <div className="feature_2 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">{title}</h1>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  );
};

export default Feature2;
