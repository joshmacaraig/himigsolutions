import axios from 'axios';

// These would typically be stored in environment variables
const B2_API_URL = process.env.REACT_APP_B2_API_URL || 'https://api.backblazeb2.com/b2api/v2';
const B2_BUCKET_NAME = process.env.REACT_APP_B2_BUCKET_NAME || 'himigsolutions';
const B2_BUCKET_ID = process.env.REACT_APP_B2_BUCKET_ID;

// This would typically be a secure API endpoint on your own server
// that handles authentication with B2 and returns credentials
const authorizeB2 = async () => {
  try {
    // In a real implementation, this would be a call to your backend API
    // that safely stores your B2 application key and returns authorization data
    const response = await axios.get('/api/b2/authorize');
    return response.data;
  } catch (error) {
    console.error('Error authorizing with B2:', error);
    throw new Error('Failed to authorize with Backblaze B2');
  }
};

// Get an upload URL from B2
const getUploadUrl = async (authData) => {
  try {
    const response = await axios.post(
      `${authData.apiUrl}/b2_get_upload_url`,
      { bucketId: B2_BUCKET_ID },
      {
        headers: {
          Authorization: authData.authorizationToken
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error getting upload URL:', error);
    throw new Error('Failed to get upload URL from Backblaze B2');
  }
};

// Upload a file to B2
export const uploadFile = async (file, section) => {
  // In development mode, use mock implementation
  if (process.env.NODE_ENV === 'development') {
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Return mock response
    return {
      fileId: 'mock-file-id-' + Math.random().toString(36).substr(2, 9),
      fileName: `${section}/${file.name}`,
      fileUrl: URL.createObjectURL(file), // Local URL for preview
      section: section,
      uploadedAt: new Date().toISOString()
    };
  }
  
  // Real implementation for production
  try {
    // 1. Authorize with B2
    const authData = await authorizeB2();
    
    // 2. Get upload URL and token
    const { uploadUrl, authorizationToken } = await getUploadUrl(authData);
    
    // 3. Create file name with section prefix
    const fileName = `${section}/${Date.now()}_${file.name}`;
    
    // 4. Read file as array buffer
    const fileData = await file.arrayBuffer();
    
    // 5. Upload the file to B2
    const response = await axios.post(uploadUrl, fileData, {
      headers: {
        Authorization: authorizationToken,
        'Content-Type': file.type,
        'X-Bz-File-Name': encodeURIComponent(fileName),
        'X-Bz-Content-Sha1': 'do_not_verify', // In production, calculate actual SHA1
        'X-Bz-Info-Author': 'himigsolutions-admin'
      }
    });
    
    // 6. Construct the download URL
    const fileUrl = `${authData.downloadUrl}/file/${B2_BUCKET_NAME}/${fileName}`;
    
    // 7. Return file information
    return {
      fileId: response.data.fileId,
      fileName: fileName,
      fileUrl: fileUrl,
      section: section,
      uploadedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error uploading file to B2:', error);
    throw new Error('Failed to upload file: ' + (error.message || 'Unknown error'));
  }
};

// List files in a B2 bucket by section
export const getMediaFiles = async (section) => {
  // In development mode, use mock implementation
  if (process.env.NODE_ENV === 'development') {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Sample mock data based on section
    if (section === 'invitations') {
      return [
        {
          fileId: 'mock-inv-1',
          fileName: 'wedding_template.jpg',
          fileUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
          section: 'invitations',
          uploadedAt: '2025-03-20T14:22:00Z'
        },
        {
          fileId: 'mock-inv-2',
          fileName: 'birthday_template.jpg',
          fileUrl: 'https://images.unsplash.com/photo-1508283362951-d3dd83d75d8e',
          section: 'invitations',
          uploadedAt: '2025-03-18T10:45:00Z'
        }
      ];
    } else if (section === 'backgrounds') {
      return [
        {
          fileId: 'mock-bg-1',
          fileName: 'elegant_floral.jpg',
          fileUrl: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322',
          section: 'backgrounds',
          uploadedAt: '2025-03-15T08:30:00Z'
        }
      ];
    } else if (section === 'music') {
      return [
        {
          fileId: 'mock-music-1',
          fileName: 'wedding_waltz.mp3',
          fileUrl: 'https://example.com/wedding_waltz.mp3',
          section: 'music',
          uploadedAt: '2025-03-10T16:20:00Z'
        }
      ];
    }
    
    // Default empty array for other sections
    return [];
  }
  
  // Real implementation for production
  try {
    // 1. Authorize with B2
    const authData = await authorizeB2();
    
    // 2. List file names with section prefix
    const response = await axios.post(
      `${authData.apiUrl}/b2_list_file_names`,
      {
        bucketId: B2_BUCKET_ID,
        prefix: `${section}/`,
        maxFileCount: 1000
      },
      {
        headers: {
          Authorization: authData.authorizationToken
        }
      }
    );
    
    // 3. Map the response to our media files format
    return response.data.files.map(file => ({
      fileId: file.fileId,
      fileName: file.fileName.replace(`${section}/`, ''),
      fileUrl: `${authData.downloadUrl}/file/${B2_BUCKET_NAME}/${file.fileName}`,
      section: section,
      uploadedAt: file.uploadTimestamp
    }));
  } catch (error) {
    console.error('Error listing files from B2:', error);
    throw new Error('Failed to retrieve media files');
  }
};

// Delete a file from B2
export const deleteMediaFile = async (fileId, fileName) => {
  // In development mode, use mock implementation
  if (process.env.NODE_ENV === 'development') {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return success
    return { success: true };
  }
  
  // Real implementation for production
  try {
    // 1. Authorize with B2
    const authData = await authorizeB2();
    
    // 2. Get file info to get the latest version
    const fileInfoResponse = await axios.post(
      `${authData.apiUrl}/b2_get_file_info`,
      { fileId },
      {
        headers: {
          Authorization: authData.authorizationToken
        }
      }
    );
    
    // 3. Delete the file
    await axios.post(
      `${authData.apiUrl}/b2_delete_file_version`,
      {
        fileId: fileInfoResponse.data.fileId,
        fileName: fileInfoResponse.data.fileName
      },
      {
        headers: {
          Authorization: authData.authorizationToken
        }
      }
    );
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting file from B2:', error);
    throw new Error('Failed to delete file');
  }
};

// Get all media files across all sections
export const getAllMediaFiles = async () => {
  // In development mode, use mock implementation
  if (process.env.NODE_ENV === 'development') {
    // Get mock data for each section
    const invitations = await getMediaFiles('invitations');
    const backgrounds = await getMediaFiles('backgrounds');
    const music = await getMediaFiles('music');
    const icons = await getMediaFiles('icons');
    
    return {
      invitations,
      backgrounds,
      music,
      icons
    };
  }
  
  // Real implementation for production
  try {
    const sections = ['invitations', 'backgrounds', 'music', 'icons'];
    const mediaBySection = {};
    
    for (const section of sections) {
      mediaBySection[section] = await getMediaFiles(section);
    }
    
    return mediaBySection;
  } catch (error) {
    console.error('Error getting all media files:', error);
    throw new Error('Failed to retrieve media files');
  }
};