import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

const options = {
  baseURL: process.env.REACT_APP_URL,
  // timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const HttpInstance = () => {
  const instance = axios.create(options);

  instance.interceptors.request.use(
    (config) => {
      const accessToken = cookie.get('access_token');

      if (accessToken) config.headers['Authorization'] = `token ${accessToken}`;
      if (config.url?.includes('/signup') || config.url?.includes('/login')) {
        delete config.headers.Authorization;
      }
      if (config.headers.isStripe) {
        config.baseURL = process.env.REACT_APP_STRIPE_API_URL;
      }

      return config;
    },
    (error) => error
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  return instance;
};

const http = HttpInstance();

export default http;
