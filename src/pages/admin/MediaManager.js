import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logoutAdmin } from '../../services/authService';
import { useAuth } from '../../context/AuthContext';
import { 
  uploadFile, 
  getAllMediaFiles, 
  deleteMediaFile 
} from '../../services/mediaService';

// Layout component for admin pages
const AdminLayout = ({ children, title }) => {
  const { admin } = useAuth();
  
  const handleLogout = () => {
    logoutAdmin();
  };

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Admin Header */}
      <header className="bg-primary shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-white">
            Himig Solutions Admin
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-white">Welcome, {admin?.name || 'Admin'}</span>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-white text-primary rounded-md hover:bg-gray-100 text-sm"
            >
              Log Out
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex space-x-6">
          <Link to="/admin/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
          <Link to="/admin/invitations" className="text-white hover:text-gray-200">Invitations</Link>
          <Link to="/admin/media" className="text-white hover:text-gray-200 font-bold">Media Manager</Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-serif font-bold text-neutral-dark">
            {title}
          </h2>
        </div>
        {children}
      </main>
    </div>
  );
};

// Component for uploading media files
const MediaUploader = ({ onUploadSuccess, section }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
    setProgress(0);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setUploading(true);
    setProgress(10);
    
    try {
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 90) {
            clearInterval(progressInterval);
            return prevProgress;
          }
          return prevProgress + 10;
        });
      }, 300);
      
      // Upload the file using our service
      const result = await uploadFile(file, section);
      
      // Clear the progress interval and set to 100%
      clearInterval(progressInterval);
      setProgress(100);
      
      // Report success
      onUploadSuccess(result);
      
      // Reset the form
      setFile(null);
      setProgress(0);
    } catch (err) {
      setError('Upload failed: ' + (err.message || 'Unknown error'));
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-medium mb-4">Upload Media for {section}</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select File
        </label>
        <input 
          type="file" 
          onChange={handleFileChange} 
          disabled={uploading}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-primary file:text-white
            hover:file:bg-primary-dark"
        />
      </div>
      
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      
      {progress > 0 && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-in-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
      
      <div className="flex justify-end">
        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className={`px-4 py-2 rounded-md text-white font-medium 
            ${!file || uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark'}`}
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
    </div>
  );
};

// Component to display the media gallery
const MediaGallery = ({ section, media, onDeleteMedia }) => {
  if (media.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-gray-500">No media files found for {section}.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-4">{section} Media Files</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {media.map((item) => (
          <div key={item.fileId} className="border rounded-lg overflow-hidden group relative">
            {item.fileUrl.match(/\.(jpeg|jpg|gif|png)$/i) ? (
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img 
                  src={item.fileUrl} 
                  alt={item.fileName} 
                  className="object-cover w-full h-full"
                />
              </div>
            ) : item.fileUrl.match(/\.(mp3|wav)$/i) ? (
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <svg className="w-12 h-12 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3a1 1 0 0 1 .993.883L13 4v16a1 1 0 0 1-1.993.117L11 20V4a1 1 0 0 1 1-1zm3.5 3a1 1 0 0 1 .993.883L16.5 7v10a1 1 0 0 1-1.993.117L14.5 17V7a1 1 0 0 1 1-1zm-7 0a1 1 0 0 1 .993.883L9.5 7v10a1 1 0 0 1-1.993.117L7.5 17V7a1 1 0 0 1 1-1zm-3.5 3a1 1 0 0 1 .993.883L5.5 10v4a1 1 0 0 1-1.993.117L3.5 14v-4a1 1 0 0 1 1-1zm14 0a1 1 0 0 1 .993.883L20.5 10v4a1 1 0 0 1-1.993.117L18.5 14v-4a1 1 0 0 1 1-1z"/>
                  </svg>
                  <p className="mt-2 text-sm text-gray-600">Audio File</p>
                </div>
              </div>
            ) : (
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <svg className="w-12 h-12 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2.5L19.5 8H14V2.5zM8.5 5H13v5h5.5v8.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2H8.5z"/>
                  </svg>
                  <p className="mt-2 text-sm text-gray-600">File</p>
                </div>
              </div>
            )}
            
            <div className="p-3">
              <p className="text-sm font-medium text-gray-900 truncate">{item.fileName}</p>
              <p className="text-xs text-gray-500">{new Date(item.uploadedAt).toLocaleDateString()}</p>
            </div>
            
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => onDeleteMedia(item.fileId, item.fileName)}
                className="p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
                title="Delete"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href={item.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 bg-primary text-white rounded-full hover:bg-primary-dark"
                title="View"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Media Manager component
const MediaManager = () => {
  // State for section tabs
  const [activeSection, setActiveSection] = useState('invitations');
  const sections = ['invitations', 'backgrounds', 'music', 'icons'];
  
  // State for media files
  const [mediaFiles, setMediaFiles] = useState({
    invitations: [],
    backgrounds: [],
    music: [],
    icons: []
  });
  
  // State for loading status
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch media files using our service
    const fetchMedia = async () => {
      try {
        setLoading(true);
        
        // Get all media files from Backblaze B2
        const allMedia = await getAllMediaFiles();
        
        setMediaFiles(allMedia);
        setError(null);
      } catch (err) {
        console.error('Error fetching media files:', err);
        setError('Failed to load media files. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  const handleUploadSuccess = (newMedia) => {
    setMediaFiles(prev => ({
      ...prev,
      [activeSection]: [...prev[activeSection], newMedia]
    }));
  };

  const handleDeleteMedia = async (fileId, fileName) => {
    if (window.confirm('Are you sure you want to delete this file? This action cannot be undone.')) {
      try {
        // Delete the file from Backblaze B2
        await deleteMediaFile(fileId, fileName);
        
        // Update local state
        setMediaFiles(prev => ({
          ...prev,
          [activeSection]: prev[activeSection].filter(item => item.fileId !== fileId)
        }));
      } catch (err) {
        console.error('Error deleting media:', err);
        alert('Failed to delete file: ' + err.message);
      }
    }
  };

  return (
    <AdminLayout title="Media Manager">
      {/* Section Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${activeSection === section
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Error alert */}
      {error && (
        <div className="mb-6 bg-red-50 text-red-700 p-4 rounded-md">
          {error}
        </div>
      )}

      {/* Loading state */}
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <>
          {/* Uploader */}
          <MediaUploader
            onUploadSuccess={handleUploadSuccess}
            section={activeSection}
          />
          
          {/* Media Gallery */}
          <MediaGallery 
            section={activeSection}
            media={mediaFiles[activeSection]}
            onDeleteMedia={handleDeleteMedia}
          />
        </>
      )}
    </AdminLayout>
  );
};

export default MediaManager;