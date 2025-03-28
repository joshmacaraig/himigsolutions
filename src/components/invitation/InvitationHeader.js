import React from 'react';
import AudioPlayer from '../AudioPlayer';

const InvitationHeader = ({ title, date, location, audioSrc }) => {
  return (
    <section className="bg-primary/5 py-16 px-4 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <p className="font-display text-secondary text-xl mb-4">You're invited to the wedding of</p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl mb-8">{date} • {location}</p>
        <div className="mb-8">
          <AudioPlayer src={audioSrc} />
        </div>
        <p className="text-neutral-dark/80 italic">Please scroll down to view our invitation</p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-secondary rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 border-2 border-accent rounded-full"></div>
      </div>
    </section>
  );
};

export default InvitationHeader;