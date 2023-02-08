import axios from 'axios';
import { uiConfig } from './ui-config';

export default axios.create({
  baseURL: '/',
  headers: {
    'Content-type': 'application/json',
  },
});
