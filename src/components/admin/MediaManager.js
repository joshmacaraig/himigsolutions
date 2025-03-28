import React, { useState, useEffect, useRef } from 'react';
import { 
  uploadMediaToB2, 
  getMediaFromB2, 
  deleteMediaFromB2 
} from '../../services/mediaService';
import './MediaManager.css';

/**
 * Media Manager Component
 * Handles uploading, viewing, and deleting media files for invitation sections
 */
const MediaManager = ({ invitationId, sectionId, mediaType, onMediaSelect }) => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  
  const fileInputRef = useRef(null);
  
  // Media type labels and settings
  const mediaSettings = {
    'images': {
      title: 'Images',
      acceptTypes: 'image/jpeg,image/png,image/gif,image/svg+xml',
      icon: '🖼️',
      maxSize: '5MB'
    },
    'music': {
      title: 'Music',
      acceptTypes: 'audio/mpeg,audio/wav,audio/ogg',
      icon: '🎵',
      maxSize: '10MB'
    }
  };
  
  const settings = mediaSettings[mediaType] || mediaSettings.images;
  
  // Load media files when the component mounts or invitationId/mediaType changes
  useEffect(() => {
    if (invitationId) {
      loadMediaFiles();
    }
  }, [invitationId, mediaType]);
  
  // Load media files from Backblaze B2
  const loadMediaFiles = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const files = await getMediaFromB2(invitationId, mediaType);
      setMediaFiles(files);
    } catch (err) {
      setError(`Error loading media: ${err.message}`);
      console.error('Error loading media files:', err);
    } finally {
      setLoading(false);
    }
  };
  
  // Handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      handleUpload(file);
    }
  };
  
  // Handle file upload
  const handleUpload = async (file) => {
    try {
      setUploading(true);
      setError(null);
      
      await uploadMediaToB2(file, invitationId, mediaType);
      
      // Reload media files after upload
      await loadMediaFiles();
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err) {
      setError(`Upload failed: ${err.message}`);
      console.error('Error uploading file:', err);
    } finally {
      setUploading(false);
      setSelectedFile(null);
    }
  };
  
  // Handle media file deletion
  const handleDelete = async (file) => {
    if (window.confirm(`Are you sure you want to delete ${file.name}?`)) {
      try {
        setLoading(true);
        await deleteMediaFromB2(file.path, file.fileId);
        
        // Remove file from local state
        setMediaFiles(mediaFiles.filter(f => f.path !== file.path));
      } catch (err) {
        setError(`Delete failed: ${err.message}`);
        console.error('Error deleting file:', err);
      } finally {
        setLoading(false);
      }
    }
  };
  
  // Handle media file selection for the invitation section
  const handleMediaSelect = (file) => {
    if (onMediaSelect) {
      onMediaSelect({
        url: file.url,
        path: file.path,
        name: file.name,
        type: mediaType,
        fileId: file.fileId
      });
    }
  };
  
  return (
    <div className="media-manager">
      <div className="media-header">
        <h3>
          {settings.icon} {settings.title} Manager
        </h3>
        <div className="upload-container">
          <input
            type="file"
            accept={settings.acceptTypes}
            onChange={handleFileSelect}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <button 
            className="button primary" 
            onClick={() => fileInputRef.current.click()}
            disabled={uploading}
          >
            {uploading ? 'Uploading...' : `Upload ${settings.title}`}
          </button>
          <div className="upload-info">
            Allowed formats: {settings.acceptTypes.split(',').join(', ')}
            <br />
            Max size: {settings.maxSize}
          </div>
        </div>
      </div>
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      
      {loading ? (
        <div className="loading">Loading media files...</div>
      ) : (
        <div className="media-grid">
          {mediaFiles.length === 0 ? (
            <div className="no-media">
              No {mediaType} uploaded yet. Click the upload button to add {mediaType}.
            </div>
          ) : (
            mediaFiles.map((file) => (
              <div className="media-item" key={file.path}>
                {mediaType === 'images' ? (
                  <img 
                    src={file.url} 
                    alt={file.name} 
                    className="media-preview"
                  />
                ) : (
                  <div className="audio-preview">
                    <audio controls src={file.url} />
                  </div>
                )}
                <div className="media-info">
                  <div className="media-name" title={file.name}>
                    {file.name.length > 18 ? file.name.substring(0, 15) + '...' : file.name}
                  </div>
                  <div className="media-actions">
                    <button 
                      className="button small" 
                      onClick={() => handleMediaSelect(file)}
                    >
                      Select
                    </button>
                    <button 
                      className="button small danger" 
                      onClick={() => handleDelete(file)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MediaManager;
