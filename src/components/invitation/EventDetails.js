import React from 'react';

const EventDetails = ({ ceremonies }) => {
  return (
    <section className="py-16 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl font-bold mb-12">Wedding Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ceremonies.map((ceremony, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ceremony.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">{ceremony.title}</h3>
              <p className="text-lg mb-2">{ceremony.time}</p>
              <p className="mb-4">{ceremony.location}</p>
              <p className="text-sm text-neutral-dark/70">{ceremony.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;