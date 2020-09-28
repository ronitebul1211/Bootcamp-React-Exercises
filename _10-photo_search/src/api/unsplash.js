import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID PGM28dPEXqcfnXaPulKT5nibU0M0bT-jgT8SfN7hOIU',
  },
});