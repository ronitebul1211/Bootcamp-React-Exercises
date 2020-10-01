import {useState, useEffect} from 'react'
import youtube from '../apis/youtube';

const useVideos = (searchTerm) => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos(searchTerm);
  }, [searchTerm]);

  const fetchVideos = async (term) => {
    const response = await youtube.get('search', {
      params: {
        q: term
      }
    });
    setVideos(response.data.items);
  };

  return [videos, fetchVideos];

}

export default useVideos;