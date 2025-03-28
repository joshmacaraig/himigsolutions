# Backblaze B2 Media Management Integration

This document provides instructions for setting up and using the Backblaze B2 integration for media management in the Himig Solutions application.

## Overview

The Backblaze B2 integration allows you to:

1. Upload media files (images, audio, etc.) to different categories
2. Browse and manage uploaded media
3. Delete media files when no longer needed
4. Use the uploaded media in the invitation sections

## Setup Instructions

### 1. Create a Backblaze B2 Account

1. Go to [Backblaze.com](https://www.backblaze.com/) and sign up for an account
2. Navigate to the B2 Cloud Storage section
3. Create a new bucket named `himigsolutions` (or choose your preferred name)
4. Set the bucket to be **Private** (recommended for security)

### 2. Create Application Keys

1. In your Backblaze B2 dashboard, go to "App Keys"
2. Create a new application key with the following permissions:
   - Read and Write access to the bucket you created
   - List All Bucket Names
   - List Files in Buckets
   - Write Files to Buckets
   - Delete Files in Buckets

3. Save the `keyID` and `applicationKey` securely - you'll need these for your backend

### 3. Configure Your Backend

For security reasons, you should not use the Backblaze B2 keys directly in your frontend code. Instead, create a simple backend API that handles authentication and provides signed URLs:

1. Create a new backend API endpoint (e.g., with Express.js, Next.js API routes, etc.)
2. Add routes for the following operations:
   - `/api/b2/authorize` - Get authorization token and API URLs
   - `/api/b2/upload` - Get an upload URL and handle file uploads
   - `/api/b2/media/:section` - List media files for a specific section
   - `/api/b2/media/:fileId` - Delete a specific media file

3. Use the Backblaze B2 Node.js SDK in your backend:
   ```bash
   npm install backblaze-b2
   ```

4. Set up environment variables in your backend:
   ```
   B2_APPLICATION_KEY_ID=your_key_id
   B2_APPLICATION_KEY=your_app_key
   B2_BUCKET_ID=your_bucket_id
   B2_BUCKET_NAME=himigsolutions
   ```

### 4. Configure Your Frontend

1. Create environment variables for your React application:
   ```
   REACT_APP_API_URL=your_backend_api_url
   ```

2. Use the media service we've created to interact with the API:
   ```javascript
   import { uploadFile, getMediaFiles, deleteMediaFile } from '../services/mediaService';
   ```

## Usage

### Uploading Media

1. Navigate to the Media Manager at `/admin/media`
2. Select the appropriate tab for the type of media (invitations, backgrounds, music, icons)
3. Click the file input to select a file
4. Click "Upload" to upload the file to Backblaze B2

### Using Media in Invitations

When creating or editing invitations, you can now refer to the uploaded media:

1. For background images:
   ```
   https://f002.backblazeb2.com/file/himigsolutions/backgrounds/your_image.jpg
   ```

2. For music files:
   ```
   https://f002.backblazeb2.com/file/himigsolutions/music/your_music.mp3
   ```

## Troubleshooting

### Common Issues

1. **Upload Errors**: Make sure your backend server is running and can communicate with Backblaze B2.

2. **Access Denied**: Check your bucket permissions and application key settings.

3. **Files Not Appearing**: Ensure you're looking in the correct section tab. If still missing, check backend logs.

4. **CORS Issues**: You may need to configure CORS settings in your Backblaze B2 bucket:
   - Go to your bucket settings
   - Add CORS rules to allow your frontend domain

## Development Mode

During development, the Media Manager uses mock data and simulated uploads. This allows you to test the functionality without consuming actual Backblaze B2 resources.

To switch to real Backblaze B2 integration:

1. Make sure all environment variables are set
2. Deploy the backend API that handles Backblaze B2 authentication
3. The application will automatically use the real integration in production mode

## Next Steps

Consider implementing the following enhancements:

1. Image optimization/resizing before upload
2. File type validation and size limits
3. Progress tracking for large file uploads
4. Multi-file upload support
5. Folder organization within sections