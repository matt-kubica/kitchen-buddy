import axios from 'axios';
import { BACKEND_HOST } from './types';

export default axios.create({
  baseURL: `http://${BACKEND_HOST}:8000`,
  headers: {
    'Content-type': 'application/json',
  },
});
