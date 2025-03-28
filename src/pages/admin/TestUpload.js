import React, { useState } from 'react';
import axios from 'axios';

// Simple layout component for test page
const TestLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-white">
            Binary File Upload Test Page
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

const TestUpload = () => {
  const [file, setFile] = useState(null);
  const [binaryData, setBinaryData] = useState(null);
  const [binaryString, setBinaryString] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [fileInfo, setFileInfo] = useState(null);
  const [showFullBinary, setShowFullBinary] = useState(false);
  const [stringFormat, setStringFormat] = useState('hex'); // 'hex', 'base64', 'utf8'
  const [uploadMethod, setUploadMethod] = useState('formData'); // 'formData' or 'rawBinary'

  // Function to copy raw binary data as a Blob
  const copyRawBinary = () => {
    if (!binaryData) return;
    
    try {
      // Create a Blob from the binary data
      const blob = new Blob([binaryData], { type: file.type || 'application/octet-stream' });
      
      // Use the clipboard API to copy the binary data
      navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]).then(() => {
        alert('Raw binary data copied to clipboard! You can paste it into applications that accept this content type.');
      }).catch(err => {
        console.error('Failed to copy raw binary:', err);
        alert('Failed to copy raw binary data. Your browser may not support this feature.');
      });
    } catch (error) {
      console.error('Error copying raw binary:', error);
      alert('Error copying raw binary data. Your browser may not support this feature.');
    }
  };

  const arrayBufferToString = (buffer, format = 'hex') => {
    const bytes = new Uint8Array(buffer);
    
    switch (format) {
      case 'hex':
        // Convert to hexadecimal representation
        return Array.from(bytes)
          .map(byte => byte.toString(16).padStart(2, '0'))
          .join('');
      
      case 'base64':
        // Convert to base64
        let binary = '';
        for (let i = 0; i < bytes.length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
      
      case 'utf8':
        // Attempt to convert to UTF-8 string (may not make sense for all binary data)
        try {
          return new TextDecoder('utf-8').decode(bytes);
        } catch (e) {
          return 'Cannot display as UTF-8 (non-text data)';
        }
        
      default:
        return Array.from(bytes).join(',');
    }
  };

  const readFileAsBinary = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const updateBinaryString = (format) => {
    if (!binaryData) return;
    const newString = arrayBufferToString(binaryData, format);
    setBinaryString(newString);
    setStringFormat(format);
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      try {
        const data = await readFileAsBinary(selectedFile);
        setBinaryData(data);
        
        // Convert the binary data to the selected string representation
        const binaryString = arrayBufferToString(data, stringFormat);
        setBinaryString(binaryString);
        
        setFileInfo({
          name: selectedFile.name,
          type: selectedFile.type,
          size: selectedFile.size,
        });
      } catch (error) {
        console.error('Error reading file as binary:', error);
        setError('Error reading file as binary');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!binaryData) {
      setError('Please select a file first');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      let result;
      
      if (uploadMethod === 'formData') {
        // FormData method (multipart/form-data)
        const formData = new FormData();
        formData.append('file', file);

        result = await axios.post(
          'https://x8ki-letl-twmt.n7.xano.io/api:jyotHfBB/test_upload',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
      } else {
        // Raw binary method
        result = await axios.post(
          'https://x8ki-letl-twmt.n7.xano.io/api:jyotHfBB/test_upload',
          binaryData,
          {
            headers: {
              'Content-Type': file.type || 'application/octet-stream',
              'Content-Length': file.size,
            },
          }
        );
      }
      
      setResponse(result.data);
    } catch (err) {
      setError(`Error: ${err.response?.data?.message || err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TestLayout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Test Binary File Upload</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                Select File to Convert
              </label>
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
              />
            </div>

            {file && (
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  <strong>Selected File:</strong> {file.name} ({Math.round(file.size / 1024)} KB)
                </p>
              </div>
            )}
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Method
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="uploadMethod"
                    value="formData"
                    checked={uploadMethod === 'formData'}
                    onChange={() => setUploadMethod('formData')}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">FormData (multipart/form-data)</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="uploadMethod"
                    value="rawBinary"
                    checked={uploadMethod === 'rawBinary'}
                    onChange={() => setUploadMethod('rawBinary')}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Raw Binary Data</span>
                </label>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                {uploadMethod === 'formData' 
                  ? 'Sends file in multipart/form-data format (standard for web forms)'
                  : 'Sends raw binary data directly in request body with appropriate Content-Type'}
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading || !binaryData}
                className={`px-4 py-2 rounded-md text-white font-medium 
                  ${isLoading || !binaryData ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                {isLoading ? 'Uploading...' : 'Upload to API'}
              </button>
            </div>
          </form>
        </div>

        {fileInfo && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold mb-3">Binary File Details</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm font-medium text-gray-700">File Name:</div>
                <div className="text-sm text-gray-900">{fileInfo.name}</div>
                
                <div className="text-sm font-medium text-gray-700">File Type:</div>
                <div className="text-sm text-gray-900">{fileInfo.type}</div>
                
                <div className="text-sm font-medium text-gray-700">Size:</div>
                <div className="text-sm text-gray-900">{Math.round(fileInfo.size / 1024)} KB</div>
              </div>
              <div className="mt-3 pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-600">File is ready to be sent as binary data</p>
              </div>
            </div>
          </div>
        )}

        {binaryString && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Binary Data</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(binaryString);
                    alert('String representation copied to clipboard!');
                  }}
                  className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
                >
                  Copy as String
                </button>
                <button
                  onClick={copyRawBinary}
                  className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm"
                >
                  Copy Raw Binary
                </button>
              </div>
            </div>
            
            <div className="flex mb-3 space-x-2">
              <div className="text-sm font-medium text-gray-700 mr-2">Format:</div>
              <button
                onClick={() => updateBinaryString('hex')}
                className={`text-sm px-2 py-1 rounded ${stringFormat === 'hex' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                Hexadecimal
              </button>
              <button
                onClick={() => updateBinaryString('base64')}
                className={`text-sm px-2 py-1 rounded ${stringFormat === 'base64' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                Base64
              </button>
              <button
                onClick={() => updateBinaryString('utf8')}
                className={`text-sm px-2 py-1 rounded ${stringFormat === 'utf8' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                UTF-8
              </button>
            </div>
            
            <div className="flex mb-2 text-sm">
              <button
                onClick={() => setShowFullBinary(!showFullBinary)}
                className="text-blue-600 hover:underline"
              >
                {showFullBinary ? 'Show Preview' : 'Show Full String'}
              </button>
            </div>
            <div className={`bg-gray-50 p-3 rounded-md overflow-auto ${showFullBinary ? 'max-h-80' : 'max-h-32'}`}>
              <p className="text-xs text-gray-800 font-mono break-all">
                {showFullBinary ? binaryString : binaryString.substring(0, 100) + '...'}
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
            {error}
          </div>
        )}

        {response && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-2">API Response</h2>
            <div className="bg-gray-50 p-3 rounded-md overflow-auto max-h-96">
              <pre className="text-xs text-gray-800">
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </TestLayout>
  );
};

export default TestUpload;
