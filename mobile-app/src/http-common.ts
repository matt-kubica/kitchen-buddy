import axios from 'axios';

const BACKEND_HOST = '192.168.1.121';

export default axios.create({
  baseURL: `http://${BACKEND_HOST}:8000`,
  headers: {
    'Content-type': 'application/json',
  },
});
