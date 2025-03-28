import React from 'react';
import Button from './Button';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  linkTo,
  buttonText = 'Learn More',
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col ${className}`}>
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-bold mb-3">{title}</h3>
      <p className="text-neutral-dark/80 mb-6 flex-grow">{description}</p>
      {linkTo && (
        <Button to={linkTo} variant="outline" size="sm" className="mt-auto self-start">
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default ServiceCard;