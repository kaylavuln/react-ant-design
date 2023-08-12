import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers you need
  },
});

// You can also add interceptors or other configurations here if needed

export default API;