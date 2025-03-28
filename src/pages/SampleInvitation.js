import React from 'react';
import InvitationHeader from '../components/invitation/InvitationHeader';
import CoupleStory from '../components/invitation/CoupleStory';
import EventDetails from '../components/invitation/EventDetails';
import Timeline from '../components/invitation/Timeline';
import PhotoGallery from '../components/invitation/PhotoGallery';
import RSVPForm from '../components/invitation/RSVPForm';
import Button from '../components/Button';

// Sample images & audio - replace with actual files in production
const sampleAudio = "https://example.com/sample-audio.mp3";
const sampleCoupleImage = "https://placehold.co/600x800";
const sampleImageArray = Array(9).fill("https://placehold.co/600x400");

const SampleInvitation = () => {
  // Sample data for the components
  const storyParagraphs = [
    "Elena and David met during a photography workshop in 2020. They were paired together for a project and quickly discovered they had a lot in common.",
    "After two years of dating, David proposed during a trip to Palawan, where they had their first vacation together. He surprised Elena with a sunset dinner on the beach and asked her to spend the rest of her life with him.",
    "Now, they're excited to begin this new chapter and can't wait to celebrate their love with family and friends."
  ];

  const ceremonies = [
    {
      title: "Wedding Ceremony",
      time: "3:00 PM - 4:00 PM",
      location: "St. Benedict Church, Manila",
      description: "Please arrive 30 minutes early. The ceremony will start promptly at 3:00 PM.",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
        </svg>
      )
    },
    {
      title: "Reception",
      time: "5:00 PM - 10:00 PM",
      location: "Grand Hyatt Manila, BGC",
      description: "Cocktail hour begins at 5:00 PM, followed by dinner and dancing.",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"></path>
        </svg>
      )
    }
  ];

  const timelineEvents = [
    {
      title: "Guests Arrive",
      time: "2:30 PM",
      description: "Welcome to St. Benedict Church",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      )
    },
    {
      title: "Ceremony",
      time: "3:00 PM",
      description: "The wedding ceremony begins",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
        </svg>
      )
    },
    {
      title: "Photo Session",
      time: "4:15 PM",
      description: "Family and group photos",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: "Cocktail Hour",
      time: "5:00 PM",
      description: "Cocktails and hors d'oeuvres at Grand Hyatt",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: "Dinner & Reception",
      time: "6:30 PM",
      description: "Dinner service followed by speeches",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: "First Dance",
      time: "8:00 PM",
      description: "The couple's first dance as newlyweds",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="invitation-sample">
      {/* Header Section */}
      <InvitationHeader 
        title="Elena & David" 
        date="August 15, 2025" 
        location="Manila, Philippines" 
        audioSrc={sampleAudio} 
      />
      
      {/* Back to Portfolio button */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <Button 
          to="/portfolio" 
          variant="outline"
          className="flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Button>
      </div>
      
      {/* Couple Story Section */}
      <CoupleStory 
        image={sampleCoupleImage} 
        story={storyParagraphs} 
      />
      
      {/* Event Details Section */}
      <EventDetails ceremonies={ceremonies} />
      
      {/* Timeline Section */}
      <Timeline events={timelineEvents} />
      
      {/* Gallery Section */}
      <PhotoGallery images={sampleImageArray} />
      
      {/* RSVP Section */}
      <RSVPForm />
      
      {/* Footer Section */}
      <footer className="py-10 px-4 text-center bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-4">Elena & David</h2>
          <p className="mb-4">August 15, 2025 • Manila, Philippines</p>
          <p className="text-sm text-neutral-dark/60 italic mb-6">
            This is a sample invitation created by Himig Solutions.<br />
            For inquiries, please <a href="/contact" className="text-primary underline">contact us</a>.
          </p>
          <div className="flex justify-center">
            <Button to="/services" variant="primary" size="sm">
              Create Your Own Invitation
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SampleInvitation;