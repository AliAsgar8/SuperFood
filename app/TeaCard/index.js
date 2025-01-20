import React from 'react';

const TeaCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="text-[#56C7BD] text-5xl">{icon}</div>
        {/* Content */}
        <div className="flex flex-col">
          <h3 className="text-xl lg:text-2xl font-semibold">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeaCard;
