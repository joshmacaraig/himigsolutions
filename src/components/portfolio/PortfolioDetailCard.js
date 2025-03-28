import React from 'react';
import Button from '../Button';
import TestimonialCard from '../TestimonialCard';
import AudioPlayer from '../AudioPlayer';

const PortfolioDetailCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-64 object-cover object-center"
      />
      
      <div className="p-6">
        <div className="mb-4">
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
            {item.category}
          </span>
        </div>
        
        <h3 className="text-2xl font-serif font-bold mb-3">{item.title}</h3>
        <p className="text-neutral-dark/80 mb-6">{item.description}</p>
        
        <h4 className="text-lg font-serif font-bold mb-3">Key Features</h4>
        <ul className="space-y-4 mb-6">
          {item.features.map((feature, index) => {
            // Check if the feature is an object with audio information
            if (typeof feature === 'object' && feature.type === 'audio') {
              return (
                <li key={index} className="ml-8">
                  <AudioPlayer src={feature.src} title="Sample Music" className="mb-2" />
                </li>
              );
            }
            
            return (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
        
        <div className="mt-8 mb-6">
          <TestimonialCard
            quote={item.testimonial.quote}
            name={item.testimonial.name}
            role={item.testimonial.event}
          />
        </div>
        
        <div className="mt-6">
          <Button to={item.linkTo} variant="primary">
            View Sample
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailCard;