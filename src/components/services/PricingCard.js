import React from 'react';
import Button from '../Button';

const PricingCard = ({ plan }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl relative ${plan.isPopular ? 'border-2 border-secondary' : ''}`}
    >
      {plan.isPopular && (
        <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-center mb-2">{plan.title}</h3>
        <div className="text-center mb-4">
          <span className="text-4xl font-bold">${plan.price}</span>
        </div>
        <p className="text-center text-neutral-dark/80 mb-6 pb-6 border-b border-neutral/50">
          {plan.description}
        </p>
        
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="px-6 pb-6 text-center">
        <Button 
          to="/contact" 
          variant={plan.buttonVariant} 
          className="w-full"
        >
          {plan.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;