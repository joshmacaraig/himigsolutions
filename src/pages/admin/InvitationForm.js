import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getInvitation, createInvitation, updateInvitation } from '../../services/invitationService';
import AdminLayout from '../../components/admin/AdminLayout';

const InvitationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    type: 'wedding',
    design: 'classic',
    date: '',
    location: '',
    musicPath: '',
    coupleImage: '',
    // Additional fields can be added here as needed
  });
  
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  
  // Design options for each invitation type
  const designOptions = {
    wedding: ['classic', 'modern', 'rustic', 'minimalist'],
    anniversary: ['elegant', 'romantic', 'nostalgic', 'contemporary'],
    babyShower: ['playful', 'cute', 'simple', 'gender-neutral'],
  };
  
  // Fetch invitation data if editing
  useEffect(() => {
    if (isEditing) {
      const fetchInvitation = async () => {
        try {
          const data = await getInvitation(id);
          setFormData({
            title: data.title || '',
            slug: data.slug || '',
            type: data.type || 'wedding',
            design: data.design || 'classic',
            date: data.date || '',
            location: data.location || '',
            musicPath: data.musicPath || '',
            coupleImage: data.coupleImage || '',
            // Set additional fields here
          });
          setError(null);
        } catch (err) {
          console.error('Error fetching invitation:', err);
          setError('Failed to load invitation data. Please try again.');
        } finally {
          setLoading(false);
        }
      };
      
      fetchInvitation();
    }
  }, [id, isEditing]);

  // Generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '_');
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      
      // Auto-generate slug from title
      if (name === 'title' && !isEditing) {
        newData.slug = generateSlug(value);
      }
      
      // Update design options when type changes
      if (name === 'type' && !designOptions[value].includes(prev.design)) {
        newData.design = designOptions[value][0];
      }
      
      return newData;
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    
    try {
      if (isEditing) {
        await updateInvitation(id, formData);
      } else {
        await createInvitation(formData);
      }
      
      navigate('/admin/invitations');
    } catch (err) {
      console.error('Error saving invitation:', err);
      setError(err.response?.data?.message || 'Failed to save invitation. Please try again.');
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-serif font-bold text-neutral-dark">
          {isEditing ? 'Edit Invitation' : 'Create New Invitation'}
        </h2>
      </div>
      
      {/* Error alert */}
      {error && (
        <div className="mb-6 bg-red-50 text-red-700 p-4 rounded-md">
          {error}
        </div>
      )}
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title field */}
            <div className="col-span-1">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            {/* Slug field */}
            <div className="col-span-1">
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                URL Slug <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
                  isEditing ? 'bg-gray-100' : ''
                }`}
                readOnly={isEditing}
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                This will be used in the URL: /invitation/{formData.slug}
              </p>
            </div>
            
            {/* Type field */}
            <div className="col-span-1">
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                Invitation Type <span className="text-red-500">*</span>
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                required
              >
                <option value="wedding">Wedding</option>
                <option value="anniversary">Anniversary</option>
                <option value="babyShower">Baby Shower</option>
              </select>
            </div>
            
            {/* Design field */}
            <div className="col-span-1">
              <label htmlFor="design" className="block text-sm font-medium text-gray-700 mb-1">
                Design Style <span className="text-red-500">*</span>
              </label>
              <select
                id="design"
                name="design"
                value={formData.design}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                required
              >
                {designOptions[formData.type].map((style) => (
                  <option key={style} value={style}>
                    {style.charAt(0).toUpperCase() + style.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Date field */}
            <div className="col-span-1">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Event Date <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="e.g., June 15, 2025"
                required
              />
            </div>
            
            {/* Location field */}
            <div className="col-span-1">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Event Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            {/* Music Path field */}
            <div className="col-span-1">
              <label htmlFor="musicPath" className="block text-sm font-medium text-gray-700 mb-1">
                Music File Path
              </label>
              <input
                type="text"
                id="musicPath"
                name="musicPath"
                value={formData.musicPath}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="/music/your-music-file.mp3"
              />
              <p className="mt-1 text-xs text-gray-500">
                Path to the music file in the public folder
              </p>
            </div>
            
            {/* Couple Image field */}
            <div className="col-span-1">
              <label htmlFor="coupleImage" className="block text-sm font-medium text-gray-700 mb-1">
                Image Path
              </label>
              <input
                type="text"
                id="coupleImage"
                name="coupleImage"
                value={formData.coupleImage}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="/img/your-image.jpg"
              />
              <p className="mt-1 text-xs text-gray-500">
                Path to the image file in the public folder
              </p>
            </div>
            
            {/* Additional custom fields can be added here */}
          </div>
          
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={() => navigate('/admin/invitations')}
              className="mr-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {saving ? 'Saving...' : isEditing ? 'Update Invitation' : 'Create Invitation'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default InvitationForm;
