import axios from 'axios';

// utils
import { getApiBaseUrl } from '@utils/env';

export const apiInstance = axios.create({
  baseURL: getApiBaseUrl(),
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});
