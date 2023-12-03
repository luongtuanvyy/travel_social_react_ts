import axios from 'axios';

const axiosClientTravel = axios.create({
  baseURL: 'https://api.anphuc.me',
  headers: {
    'Content-Type': 'application/json',
  },
});

const axiosClientProvince = axios.create({
  baseURL: 'https://provinces.open-api.vn',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClientTravel.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4IiwiaWF0IjoxNzAxNTkwMzc5LCJleHAiOjE3MDE1OTM5Nzl9.ob4BKq1yqN4mDhkY6USIhyaNid92PPrOXW2pOt0Ivec`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClientTravel.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export { axiosClientTravel, axiosClientProvince };
