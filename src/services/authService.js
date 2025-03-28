import axios from 'axios';

// Get API URL from environment or use default
const API_URL = process.env.REACT_APP_XANO_API_URL || 'https://your-xano-instance.com/api:jyotHfBB';

console.log('Using API URL:', API_URL); // Debug log

// Create axios instance with default headers
const authApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests if available
authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
      // For Xano, sometimes you need this format instead:
      // config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle unauthorized responses
authApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('401 Unauthorized response - redirecting to login');
      // Clear token and redirect to login
      localStorage.removeItem('adminToken');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// Authentication service functions
export const loginAdmin = async (credentials) => {
  console.log('Attempting login with credentials:', credentials.email);
  try {
    const response = await authApi.post('/auth/login', credentials);
    console.log('Login response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    throw error;
  }
};

export const logoutAdmin = () => {
  localStorage.removeItem('adminToken');
  window.location.href = '/admin/login';
};

export const getCurrentAdmin = async () => {
  try {
    const response = await authApi.get('/auth/me');
    console.log('Current admin response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Get current admin error:', error.response?.data || error.message);
    throw error;
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('adminToken');
  console.log('Token exists:', !!token);
  return !!token;
};

export default authApi;
