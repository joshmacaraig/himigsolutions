import axios from 'axios';

/**
 * Service for interacting with Backblaze B2 Cloud Storage
 */
class BackblazeService {
  constructor() {
    // Backblaze B2 credentials
    this.applicationKeyId = '00553d06cc1f9140000000004';
    this.applicationKey = 'K005spxDdAPXhyQN9yuI11uI/Wia6QU';
    this.bucketName = 'himigsolutions-media';
    
    // API endpoints
    this.authUrl = 'https://api.backblazeb2.com/b2api/v2/b2_authorize_account';
    
    // Auth token and API URL will be filled after authentication
    this.authToken = null;
    this.apiUrl = null;
    this.downloadUrl = null;
    this.bucketId = null;
    
    // Cache auth token for 23 hours (Backblaze tokens last 24 hours)
    this.tokenExpiry = null;
  }

  /**
   * Authenticate with Backblaze B2 API
   */
  async authenticate() {
    // Check if we already have a valid token
    if (this.authToken && this.tokenExpiry && new Date() < this.tokenExpiry) {
      return {
        authorizationToken: this.authToken,
        apiUrl: this.apiUrl,
        downloadUrl: this.downloadUrl,
        bucketId: this.bucketId
      };
    }

    try {
      const auth = Buffer.from(`${this.applicationKeyId}:${this.applicationKey}`).toString('base64');
      
      const response = await axios.get(this.authUrl, {
        headers: {
          Authorization: `Basic ${auth}`
        }
      });
      
      const data = response.data;
      
      // Store auth data
      this.authToken = data.authorizationToken;
      this.apiUrl = data.apiUrl;
      this.downloadUrl = data.downloadUrl;
      
      // Set token expiry (23 hours from now)
      this.tokenExpiry = new Date();
      this.tokenExpiry.setHours(this.tokenExpiry.getHours() + 23);
      
      // Get bucket ID
      await this.getBucketId();
      
      return {
        authorizationToken: this.authToken,
        apiUrl: this.apiUrl,
        downloadUrl: this.downloadUrl,
        bucketId: this.bucketId
      };
    } catch (error) {
      console.error('B2 authentication error:', error);
      throw new Error('Failed to authenticate with Backblaze B2');
    }
  }

  /**
   * Get the bucket ID for the specified bucket name
   */
  async getBucketId() {
    if (this.bucketId) return this.bucketId;
    
    try {
      const auth = await this.authenticate();
      
      const response = await axios.post(
        `${auth.apiUrl}/b2api/v2/b2_list_buckets`,
        { accountId: auth.accountId },
        {
          headers: { Authorization: auth.authorizationToken }
        }
      );
      
      const bucket = response.data.buckets.find(b => b.bucketName === this.bucketName);
      
      if (!bucket) {
        throw new Error(`Bucket "${this.bucketName}" not found`);
      }
      
      this.bucketId = bucket.bucketId;
      return this.bucketId;
    } catch (error) {
      console.error('Error getting bucket ID:', error);
      throw new Error('Failed to get bucket ID');
    }
  }

  /**
   * Upload a file to Backblaze B2
   * @param {File} file - The file to upload
   * @param {string} fileName - The name to give the file in B2
   * @param {string} contentType - The MIME type of the file
   * @returns {Promise<Object>} - Upload response
   */
  async uploadFile(file, fileName, contentType) {
    try {
      // Authenticate
      const auth = await this.authenticate();
      
      // Get upload URL
      const uploadUrlResponse = await axios.post(
        `${auth.apiUrl}/b2api/v2/b2_get_upload_url`,
        { bucketId: this.bucketId },
        {
          headers: { Authorization: auth.authorizationToken }
        }
      );
      
      // Prepare file for upload
      const reader = new FileReader();
      const filePromise = new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
      
      const fileBuffer = await filePromise;
      
      // Upload the file
      const uploadResponse = await axios.post(
        uploadUrlResponse.data.uploadUrl,
        fileBuffer,
        {
          headers: {
            Authorization: uploadUrlResponse.data.authorizationToken,
            'Content-Type': contentType,
            'X-Bz-File-Name': encodeURIComponent(fileName),
            'X-Bz-Content-Sha1': 'do_not_verify' // In production, calculate SHA1
          }
        }
      );
      
      return uploadResponse.data;
    } catch (error) {
      console.error('File upload error:', error);
      throw new Error('Failed to upload file to Backblaze B2');
    }
  }

  /**
   * List files in a folder
   * @param {string} folderPath - Path to the folder (e.g., 'invitation-123/images/')
   * @returns {Promise<Array>} - List of files
   */
  async listFiles(folderPath) {
    try {
      const auth = await this.authenticate();
      
      const response = await axios.post(
        `${auth.apiUrl}/b2api/v2/b2_list_file_names`,
        {
          bucketId: this.bucketId,
          prefix: folderPath,
          delimiter: '/',
          maxFileCount: 1000
        },
        {
          headers: { Authorization: auth.authorizationToken }
        }
      );
      
      return response.data.files;
    } catch (error) {
      console.error('Error listing files:', error);
      throw new Error('Failed to list files from Backblaze B2');
    }
  }

  /**
   * Delete a file from Backblaze B2
   * @param {string} fileName - Full path and name of the file to delete
   * @param {string} fileId - ID of the file to delete
   * @returns {Promise<Object>} - Delete response
   */
  async deleteFile(fileName, fileId) {
    try {
      const auth = await this.authenticate();
      
      const response = await axios.post(
        `${auth.apiUrl}/b2api/v2/b2_delete_file_version`,
        {
          fileName: fileName,
          fileId: fileId
        },
        {
          headers: { Authorization: auth.authorizationToken }
        }
      );
      
      return response.data;
    } catch (error) {
      console.error('Error deleting file:', error);
      throw new Error('Failed to delete file from Backblaze B2');
    }
  }

  /**
   * Get a download URL for a file
   * @param {string} fileName - Full path and name of the file
   * @returns {string} - Download URL
   */
  getDownloadUrl(fileName) {
    return `${this.downloadUrl}/file/${this.bucketName}/${fileName}`;
  }
}

// Create and export a singleton instance
const backblazeService = new BackblazeService();
export default backblazeService;
