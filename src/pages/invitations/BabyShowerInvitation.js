import React from 'react';
import InvitationHeader from '../../components/invitation/InvitationHeader';
import CoupleStory from '../../components/invitation/CoupleStory';
import EventDetails from '../../components/invitation/EventDetails';
import Timeline from '../../components/invitation/Timeline';
import PhotoGallery from '../../components/invitation/PhotoGallery';
import RSVPForm from '../../components/invitation/RSVPForm';
import Button from '../../components/Button';

const BabyShowerInvitation = ({ invitationData, design = 'playful' }) => {
  // Baby shower-specific content - use props if available, otherwise defaults
  const {
    title = "Baby Thompson is on the way!",
    date = "May 20, 2025",
    location = "Shangri-La at the Fort, Manila",
    musicPath = "/music/gentle-lullaby.mp3",
    coupleImage = "/img/baby-parents.jpg"
  } = invitationData || {};
  
  // Design-specific class names
  const designClasses = {
    playful: "babyshower-theme-playful bg-blue-50",
    cute: "babyshower-theme-cute bg-pink-50",
    simple: "babyshower-theme-simple bg-white",
    'gender-neutral': "babyshower-theme-neutral bg-yellow-50"
  };
  
  // Get the appropriate design class, defaulting to playful if not found
  const themeClass = designClasses[design] || designClasses.playful;
  
  const storyParagraphs = [
    "Emma and James are thrilled to be welcoming their first child into the world this summer. After three years of marriage, they're excited to begin this new chapter in their lives.",
    "Baby Thompson will be arriving in July, and they can't wait to introduce their little one to their beloved family and friends.",
    "Please join us in celebrating the upcoming arrival of their bundle of joy with a baby shower filled with love, laughter, and well wishes for the new family."
  ];

  const ceremonies = [
    {
      title: "Baby Shower Celebration",
      time: "2:00 PM - 5:00 PM",
      location: "The Garden Room, Shangri-La at the Fort",
      description: "Join us for an afternoon of games, refreshments, and celebrating the soon-to-arrive Baby Thompson!",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      )
    }
  ];

  const timelineEvents = [
    {
      title: "Arrival & Welcome",
      time: "2:00 PM",
      description: "Welcome drinks and mingling",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: "Baby Shower Games",
      time: "2:30 PM",
      description: "Fun activities and games for guests",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 5a1 1 0 102 0V4a1 1 0 00-1-1h-1a1 1 0 00-1 1v1a1 1 0 001 1zm-1 9a1 1 0 102 0v-1a1 1 0 00-1-1h-1a1 1 0 00-1 1v1a1 1 0 001 1zm-7-9a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v1a1 1 0 001 1h1zm-1 9a1 1 0 001-1v-1a1 1 0 00-1-1H4a1 1 0 00-1 1v1a1 1 0 001 1h1z"></path>
        </svg>
      )
    },
    {
      title: "Light Refreshments",
      time: "3:30 PM",
      description: "Enjoy a spread of delightful treats",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6 3V2h8v1h1a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h1zM5 0a1 1 0 00-1 1v1a1 1 0 001 1h10a1 1 0 001-1V1a1 1 0 00-1-1H5z" clipRule="evenodd"></path>
          <path d="M7 14a1 1 0 01.55.17L10 16.39l2.45-2.22a1 1 0 011.1 0l2 1.83a1 1 0 01.12 1.46l-2.45 2.78a1 1 0 01-1.1.33L10 19l-2.12 1.57a1 1 0 01-1.1-.33l-2.45-2.78A1 1 0 014.45 16l2-1.83A1 1 0 017 14z"></path>
        </svg>
      )
    },
    {
      title: "Gift Opening",
      time: "4:00 PM",
      description: "Emma and James open their baby gifts",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path>
          <path d="M9 11H3v5a2 2 0 002 2h4v-7zm2 7h4a2 2 0 002-2v-5h-6v7z"></path>
        </svg>
      )
    },
    {
      title: "Parenting Wisdom",
      time: "4:30 PM",
      description: "Guests share advice for the new parents",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
        </svg>
      )
    }
  ];
  
  // Sample gallery images - replace with real paths
  const galleryImages = Array(9).fill("/img/babyshower-placeholder.jpg");

  return (
    <div className={`invitation-template ${themeClass}`}>
      {/* Header Section */}
      <InvitationHeader 
        title={title} 
        date={date} 
        location={location} 
        audioSrc={musicPath} 
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
        image={coupleImage} 
        story={storyParagraphs} 
      />
      
      {/* Event Details Section */}
      <EventDetails ceremonies={ceremonies} />
      
      {/* Timeline Section */}
      <Timeline events={timelineEvents} />
      
      {/* Gallery Section */}
      <PhotoGallery images={galleryImages} />
      
      {/* RSVP Section */}
      <RSVPForm />
      
      {/* Footer Section */}
      <footer className="py-10 px-4 text-center bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-4">Emma & James</h2>
          <p className="mb-4">{date} • {location}</p>
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

export default BabyShowerInvitation;