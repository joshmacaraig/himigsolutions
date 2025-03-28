import React from 'react';

const Timeline = ({ events }) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl font-bold mb-12 text-center">Wedding Day Timeline</h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
          
          {/* Timeline events */}
          <div className="space-y-16">
            {events.map((event, index) => (
              <div 
                key={index} 
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <h3 className="font-serif text-xl font-bold">{event.title}</h3>
                  <p className="text-primary font-bold mb-2">{event.time}</p>
                  <p className="text-neutral-dark/80">{event.description}</p>
                </div>
                
                <div className="w-10 h-10 bg-primary rounded-full border-4 border-white flex items-center justify-center z-10">
                  <event.icon className="w-5 h-5 text-white" />
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;