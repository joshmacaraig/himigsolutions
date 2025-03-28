import React from 'react';
import SectionHeading from '../SectionHeading';
import Button from '../Button';
import AudioPlayer from '../AudioPlayer';

const ServiceDetail = ({ service, index }) => {
  return (
    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
      <div className="w-full lg:w-1/2">
        <SectionHeading
          subtitle="Our Service"
          title={service.title}
          description={service.description}
          centered={false}
        />
        
        <div className="mt-6">
          <h3 className="text-xl font-serif font-bold mb-4">Features & Benefits</h3>
          <ul className="space-y-3">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8">
          <Button to="#pricing" variant="primary">
            View Pricing Options
          </Button>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2">
        {service.audio ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-serif font-bold mb-4">Listen to a Sample</h4>
            <AudioPlayer src={service.audio} />
          </div>
        ) : (
          <img 
            src={service.image} 
            alt={service.title} 
            className="rounded-lg shadow-lg w-full h-auto" 
          />
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;