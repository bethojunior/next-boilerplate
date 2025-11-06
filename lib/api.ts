import axios from 'axios';

export const BASE_URL = "";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = document.cookie.split('; ').find(row => row.startsWith('auth_token='))?.split('=')[1];
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export const apiService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', {
      email,
      password
    });
    return response.data;
  },

  getUsers: async () => {
    const response = await api.get('/users');
    return response.data;
  },

  createUser: async (userData: { name: string; email: string; password: string }) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  getMe: async (): Promise<User> => {
    const response = await api.get('/user/me');
    return response.data;
  },

  getUserByEmail: async (email: string): Promise<User> => {
    const response = await api.get(`/user/email/${email}`);
    return response.data;
  },

}; 