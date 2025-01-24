import axios from 'axios';
import { API_BASE_URL } from '@env';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': true,
  },
});

export const getGoogleLoginUrl = async () => {
  try {
    console.log('API_BASE_URL', API_BASE_URL);
    const response = await api.get('/api/auth/google');
    return response.data;
  } catch (error) {
    console.error('Error fetching Google login URL:', error.response?.data || error.message);
    throw error;
  }
};
