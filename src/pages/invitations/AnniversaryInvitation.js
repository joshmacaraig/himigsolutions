import React from 'react';
import InvitationHeader from '../../components/invitation/InvitationHeader';
import CoupleStory from '../../components/invitation/CoupleStory';
import EventDetails from '../../components/invitation/EventDetails';
import Timeline from '../../components/invitation/Timeline';
import PhotoGallery from '../../components/invitation/PhotoGallery';
import RSVPForm from '../../components/invitation/RSVPForm';
import Button from '../../components/Button';

const AnniversaryInvitation = ({ invitationData, design = 'elegant' }) => {
  // Anniversary-specific content - use props if available, otherwise defaults
  const {
    title = "Michael & Jennifer's 25th Anniversary",
    date = "June 12, 2025",
    location = "The Peninsula Manila, Makati City",
    musicPath = "/music/anniversary-waltz.mp3",
    coupleImage = "/img/anniversary-couple.jpg"
  } = invitationData || {};
  
  // Design-specific class names
  const designClasses = {
    elegant: "anniversary-theme-elegant bg-slate-50",
    romantic: "anniversary-theme-romantic bg-rose-50",
    nostalgic: "anniversary-theme-nostalgic bg-sepia-50",
    contemporary: "anniversary-theme-contemporary bg-zinc-50"
  };
  
  // Get the appropriate design class, defaulting to elegant if not found
  const themeClass = designClasses[design] || designClasses.elegant;
  
  const storyParagraphs = [
    "Michael and Jennifer met in college 25 years ago. They were both studying architecture and connected over their shared love of design and creativity.",
    "Their journey together has taken them around the world, through the joys of raising two wonderful children, and building a beautiful life filled with love and laughter.",
    "As they celebrate their 25th wedding anniversary, they invite you to join them in commemorating this special milestone in their life together."
  ];

  const ceremonies = [
    {
      title: "Anniversary Celebration",
      time: "6:00 PM - 11:00 PM",
      location: "The Peninsula Manila, Makati",
      description: "Join us for an evening of reminiscing, dining, and dancing as we celebrate 25 years of marriage.",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const timelineEvents = [
    {
      title: "Welcome Cocktails",
      time: "6:00 PM",
      description: "Arrival and welcome drinks",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: "Memory Lane Presentation",
      time: "7:00 PM",
      description: "A slideshow journey through 25 years of marriage",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: "Dinner Service",
      time: "7:45 PM",
      description: "Five-course dinner with wine pairings",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: "Speeches & Toasts",
      time: "9:00 PM",
      description: "Heartfelt words from family and friends",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: "Anniversary Waltz",
      time: "9:30 PM",
      description: "Michael and Jennifer's anniversary dance",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path>
        </svg>
      )
    },
    {
      title: "Dancing & Celebration",
      time: "10:00 PM - 11:00 PM",
      description: "Open dance floor and continued celebrations",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
        </svg>
      )
    }
  ];
  
  // Sample gallery images - replace with real paths
  const galleryImages = Array(9).fill("/img/anniversary-placeholder.jpg");

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
          <h2 className="font-serif text-2xl font-bold mb-4">{title.split("'")[0]}</h2>
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

export default AnniversaryInvitation;