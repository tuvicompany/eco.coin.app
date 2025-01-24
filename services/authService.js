import axios from 'axios';
import { API_BASE_URL } from '@env';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getGoogleLoginUrl = async () => {
  try {
    const response = await api.get('/auth/google-login');
    return response.data;
  } catch (error) {
    console.error('Error fetching Google login URL:', error.response?.data || error.message);
    throw error;
  }
};

export const fetchUserInfo = async (code) => {
  try {
    const response = await api.post('/auth/google-callback', { code });
    return response.data;
  } catch (error) {
    console.error('Error fetching user info:', error.response?.data || error.message);
    throw error;
  }
};
