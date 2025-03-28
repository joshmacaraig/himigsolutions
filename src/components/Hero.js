import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div className="relative bg-neutral-dark overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80 mix-blend-multiply"></div>
      
      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Your Story, <span className="font-display text-secondary">Our Melody</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Custom digital invitations and AI-generated music that perfectly capture the spirit of your special moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/services" variant="secondary" size="lg">
              Our Services
            </Button>
            <Button to="/portfolio" variant="outline-light" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;