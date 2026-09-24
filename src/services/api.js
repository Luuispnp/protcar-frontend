import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dg1th6sg5yu57.cloudfront.net/api',
});

// Interceptador para adicionar o JWT no cabeçalho
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});