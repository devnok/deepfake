import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://c3.iptime.org:1488/',
  responseType: 'json',
});

export { apiClient };
