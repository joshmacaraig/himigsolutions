import React, { useState, useEffect } from 'react';
import MediaManager from './MediaManager';
import './SectionMediaTab.css';

/**
 * Section Media Tab Component
 * Handles media management for a specific section of an invitation
 */
const SectionMediaTab = ({ section, onUpdate, invitationId }) => {
  const [activeTab, setActiveTab] = useState('images');
  const [selectedImage, setSelectedImage] = useState(section?.image?.url || null);
  const [selectedMusic, setSelectedMusic] = useState(section?.music?.url || null);
  
  // Initialize selected media from section data
  useEffect(() => {
    if (section) {
      if (section.image && section.image.url) {
        setSelectedImage(section.image.url);
      }
      
      if (section.music && section.music.url) {
        setSelectedMusic(section.music.url);
      }
    }
  }, [section]);
  
  // Handle media selection for images
  const handleImageSelect = (media) => {
    setSelectedImage(media.url);
    
    // Update section data
    const updatedSection = {
      ...section,
      image: {
        url: media.url,
        path: media.path,
        fileId: media.fileId
      }
    };
    
    onUpdate(updatedSection);
  };
  
  // Handle media selection for music
  const handleMusicSelect = (media) => {
    setSelectedMusic(media.url);
    
    // Update section data
    const updatedSection = {
      ...section,
      music: {
        url: media.url,
        path: media.path,
        fileId: media.fileId
      }
    };
    
    onUpdate(updatedSection);
  };
  
  // Clear selected media
  const handleClearMedia = (mediaType) => {
    if (mediaType === 'images') {
      setSelectedImage(null);
      
      // Update section data
      const updatedSection = {
        ...section,
        image: null
      };
      
      onUpdate(updatedSection);
    } else if (mediaType === 'music') {
      setSelectedMusic(null);
      
      // Update section data
      const updatedSection = {
        ...section,
        music: null
      };
      
      onUpdate(updatedSection);
    }
  };
  
  return (
    <div className="section-media-tab">
      <div className="media-tabs">
        <button 
          className={`tab-button ${activeTab === 'images' ? 'active' : ''}`}
          onClick={() => setActiveTab('images')}
        >
          🖼️ Images
        </button>
        <button 
          className={`tab-button ${activeTab === 'music' ? 'active' : ''}`}
          onClick={() => setActiveTab('music')}
        >
          🎵 Music
        </button>
      </div>
      
      <div className="media-preview-container">
        <div className="media-preview-heading">
          Currently Selected {activeTab === 'images' ? 'Image' : 'Music'}:
        </div>
        
        {activeTab === 'images' ? (
          selectedImage ? (
            <div className="selected-image-container">
              <img 
                src={selectedImage} 
                alt="Selected section image" 
                className="selected-image"
              />
              <button 
                className="button small danger" 
                onClick={() => handleClearMedia('images')}
              >
                Clear Image
              </button>
            </div>
          ) : (
            <div className="no-selection">No image selected</div>
          )
        ) : (
          selectedMusic ? (
            <div className="selected-music-container">
              <audio 
                src={selectedMusic} 
                controls 
                className="selected-music"
              />
              <button 
                className="button small danger" 
                onClick={() => handleClearMedia('music')}
              >
                Clear Music
              </button>
            </div>
          ) : (
            <div className="no-selection">No music selected</div>
          )
        )}
      </div>
      
      {invitationId ? (
        <MediaManager 
          invitationId={invitationId}
          sectionId={section?.id}
          mediaType={activeTab}
          onMediaSelect={activeTab === 'images' ? handleImageSelect : handleMusicSelect}
        />
      ) : (
        <div className="save-invitation-notice">
          Please save the invitation first to manage media files.
        </div>
      )}
    </div>
  );
};

export default SectionMediaTab;
