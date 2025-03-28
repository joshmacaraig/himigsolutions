import React, { useState, useEffect } from 'react';
import { 
  updateSection,
  createSection,
  getSection
} from '../../services/sectionService';
import SectionMediaTab from './SectionMediaTab';
import './SectionEditor.css';

/**
 * Section Editor Component
 * Comprehensive editor for invitation sections, including content and media management
 */
const SectionEditor = ({ invitationId, sectionId, onSave, onCancel }) => {
  const [section, setSection] = useState({
    title: '',
    type: 'header',
    content: '',
    order: 0,
    isActive: true,
    settings: {},
    image: null,
    music: null
  });
  
  const [activeTab, setActiveTab] = useState('content');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  
  const isEditing = !!sectionId;
  
  // Section type options
  const sectionTypes = [
    { value: 'header', label: 'Header' },
    { value: 'intro', label: 'Introduction' },
    { value: 'details', label: 'Event Details' },
    { value: 'couple', label: 'Couple Info' },
    { value: 'gallery', label: 'Photo Gallery' },
    { value: 'rsvp', label: 'RSVP Form' },
    { value: 'venue', label: 'Venue/Map' },
    { value: 'countdown', label: 'Countdown' },
    { value: 'custom', label: 'Custom Section' }
  ];
  
  // Fetch section data if editing
  useEffect(() => {
    if (isEditing) {
      const fetchSection = async () => {
        try {
          setLoading(true);
          setError(null);
          
          const data = await getSection(sectionId);
          
          setSection({
            title: data.title || '',
            type: data.type || 'header',
            content: data.content || '',
            order: data.order || 0,
            isActive: data.isActive !== false,
            settings: data.settings || {},
            image: data.image || null,
            music: data.music || null
          });
        } catch (err) {
          setError(`Failed to load section: ${err.message}`);
          console.error('Error fetching section:', err);
        } finally {
          setLoading(false);
        }
      };
      
      fetchSection();
    }
  }, [sectionId, isEditing]);
  
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSection(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  // Handle settings changes
  const handleSettingChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSection(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        [name]: type === 'checkbox' ? checked : value
      }
    }));
  };
  
  // Handle section update from media tab
  const handleSectionUpdate = (updatedSection) => {
    setSection(updatedSection);
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      setError(null);
      
      let result;
      
      if (isEditing) {
        result = await updateSection(sectionId, section);
      } else {
        result = await createSection(invitationId, section);
      }
      
      if (onSave) {
        onSave(result);
      }
    } catch (err) {
      setError(`Failed to save section: ${err.message}`);
      console.error('Error saving section:', err);
    } finally {
      setSaving(false);
    }
  };
  
  if (loading) {
    return <div className="loading-indicator">Loading section data...</div>;
  }
  
  return (
    <div className="section-editor">
      <div className="section-editor-header">
        <h3>{isEditing ? 'Edit Section' : 'Create New Section'}</h3>
      </div>
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      
      <div className="section-tabs">
        <button 
          className={`tab-button ${activeTab === 'content' ? 'active' : ''}`}
          onClick={() => setActiveTab('content')}
        >
          Content & Settings
        </button>
        <button 
          className={`tab-button ${activeTab === 'media' ? 'active' : ''}`}
          onClick={() => setActiveTab('media')}
          disabled={!isEditing && !invitationId}
        >
          Media Manager
        </button>
      </div>
      
      <div className="section-tab-content">
        {activeTab === 'content' ? (
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="title">Section Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={section.title}
                onChange={handleChange}
                placeholder="Enter section title"
                required
              />
            </div>
            
            <div className="form-row">
              <label htmlFor="type">Section Type</label>
              <select
                id="type"
                name="type"
                value={section.type}
                onChange={handleChange}
                required
              >
                {sectionTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-row">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                value={section.content}
                onChange={handleChange}
                placeholder="Enter section content (supports HTML)"
                rows={8}
              />
            </div>
            
            <div className="form-row">
              <label htmlFor="order">Display Order</label>
              <input
                type="number"
                id="order"
                name="order"
                value={section.order}
                onChange={handleChange}
                min="0"
              />
              <div className="help-text">Lower numbers display first</div>
            </div>
            
            <div className="form-row checkbox-row">
              <label>
                <input
                  type="checkbox"
                  name="isActive"
                  checked={section.isActive}
                  onChange={handleChange}
                />
                Active (visible on invitation)
              </label>
            </div>
            
            <div className="section-settings">
              <h4>Additional Settings</h4>
              
              <div className="form-row">
                <label htmlFor="settings.backgroundColor">Background Color</label>
                <input
                  type="text"
                  id="settings.backgroundColor"
                  name="backgroundColor"
                  value={section.settings.backgroundColor || ''}
                  onChange={handleSettingChange}
                  placeholder="#ffffff"
                />
              </div>
              
              <div className="form-row">
                <label htmlFor="settings.textColor">Text Color</label>
                <input
                  type="text"
                  id="settings.textColor"
                  name="textColor"
                  value={section.settings.textColor || ''}
                  onChange={handleSettingChange}
                  placeholder="#000000"
                />
              </div>
              
              <div className="form-row checkbox-row">
                <label>
                  <input
                    type="checkbox"
                    name="fullWidth"
                    checked={section.settings.fullWidth || false}
                    onChange={handleSettingChange}
                  />
                  Full Width Section
                </label>
              </div>
              
              <div className="form-row checkbox-row">
                <label>
                  <input
                    type="checkbox"
                    name="showBorder"
                    checked={section.settings.showBorder || false}
                    onChange={handleSettingChange}
                  />
                  Show Border
                </label>
              </div>
            </div>
            
            <div className="form-actions">
              <button
                type="button"
                className="button secondary"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="button primary"
                disabled={saving}
              >
                {saving ? 'Saving...' : isEditing ? 'Update Section' : 'Create Section'}
              </button>
            </div>
          </form>
        ) : (
          <SectionMediaTab 
            section={section}
            onUpdate={handleSectionUpdate}
            invitationId={invitationId || (section && section.invitationId)}
          />
        )}
      </div>
    </div>
  );
};

export default SectionEditor;
