import React from 'react';
import Button from '../Button';

const CustomSolutionCard = ({ solution }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-serif font-bold mb-2">{solution.title}</h3>
      <p className="text-neutral-dark/80 mb-3">{solution.description}</p>
      <div className="font-bold text-primary text-lg mb-4">{solution.priceRange}</div>
      <Button to="/contact" variant="outline" className="w-full">
        {solution.buttonText}
      </Button>
    </div>
  );
};

export default CustomSolutionCard;