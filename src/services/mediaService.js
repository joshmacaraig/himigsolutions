import authApi from './authService';

// Media service functions
export const getMedia = async (params = {}) => {
  try {
    const response = await authApi.get('/media', { params });
    return response.data;
  } catch (error) {
    console.error('Get media error:', error.response?.data || error.message);
    throw error;
  }
};

export const uploadMedia = async (fileData) => {
  try {
    // Create FormData object for file upload
    const formData = new FormData();
    
    // If fileData is a File object, append it directly
    if (fileData instanceof File) {
      formData.append('file', fileData);
    } else {
      // If fileData contains a file property and additional metadata
      if (fileData.file) {
        formData.append('file', fileData.file);
      }
      
      // Append any additional metadata
      Object.keys(fileData).forEach(key => {
        if (key !== 'file') {
          formData.append(key, fileData[key]);
        }
      });
    }
    
    // Configure request with multipart/form-data header
    const response = await authApi.post('/media/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Upload media error:', error.response?.data || error.message);
    throw error;
  }
};

export const deleteMedia = async (mediaId) => {
  try {
    const response = await authApi.delete(`/media/${mediaId}`);
    return response.data;
  } catch (error) {
    console.error('Delete media error:', error.response?.data || error.message);
    throw error;
  }
};

// Helper function to generate a secure URL for media access
export const getMediaUrl = (mediaPath) => {
  // If the path is already a full URL, return it
  if (mediaPath.startsWith('http://') || mediaPath.startsWith('https://')) {
    return mediaPath;
  }
  
  // Otherwise, construct the URL using the API base URL
  const baseUrl = process.env.REACT_APP_XANO_API_URL || 'https://your-xano-instance.com/api:jyotHfBB';
  
  // If the mediaPath already starts with a slash, don't add another one
  const formattedPath = mediaPath.startsWith('/') ? mediaPath : `/${mediaPath}`;
  
  return `${baseUrl}/media${formattedPath}`;
};

// Function to check if a file type is allowed
export const isAllowedFileType = (file, allowedTypes = [
  'image/jpeg', 
  'image/png', 
  'image/gif', 
  'image/svg+xml',
  'audio/mpeg',
  'audio/wav',
  'video/mp4'
]) => {
  return allowedTypes.includes(file.type);
};

// Function to check if a file size is within limits
export const isAllowedFileSize = (file, maxSizeMB = 5) => {
  const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to bytes
  return file.size <= maxSizeBytes;
};
