import axios from 'axios';

const BACKEND_HOST = '178.218.224.33';

export default axios.create({
  baseURL: `http://${BACKEND_HOST}:8000`,
  headers: {
    'Content-type': 'application/json',
  },
});
