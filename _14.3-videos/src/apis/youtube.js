import axios from 'axios';

const KEY = 'AIzaSyBNxSn2GWx5zEZnFWom_YDTmm3zfIaPXx0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});