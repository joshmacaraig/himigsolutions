import React from 'react';

const TestimonialCard = ({ quote, name, role, image, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col ${className}`}>
      <div className="mb-4">
        <svg className="w-8 h-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-neutral-dark/90 italic mb-6">{quote}</p>
      <div className="mt-auto flex items-center">
        {image && (
          <div className="w-10 h-10 mr-3 rounded-full overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <h4 className="font-medium text-neutral-dark">{name}</h4>
          {role && <p className="text-sm text-neutral-dark/70">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;