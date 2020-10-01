import React, {useState, useEffect} from 'react'
import useVideos from '../hooks/useVideos';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';

const VideoPage = () => {

  const [videos, fetchVideos] = useVideos('buildings');
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  

  return(
    <div className="ui container">
      <SearchBar onTermSubmit={fetchVideos}/>
      <div className="ui grid">
        <div className="eleven wide column">
          <VideoDetail video={selectedVideo}/>
        </div>
        <div className="five wide column">
          <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
        </div>
      </div>
    </div>
  );


}


// class VideoPage extends React.Component{

//   state = {videos: [], selectedVideo: null};

//   componentDidMount(){
//     this.onTermSubmit('buildings');
//   }

//   onTermSubmit = async (term) => {
//     const response = await youtube.get('search', {
//       params: {
//         q: term
//       }
//     });
//     this.setState({ 
//       videos: response.data.items,
//       selectedVideo: response.data.items[0]
//     });
//   };

//   onVideoSelect = (video) => {
//     this.setState({selectedVideo: video})
//   };

//   render(){
//     return(
//       <div className="ui container">
//         <SearchBar onTermSubmit={this.onTermSubmit}/>
//         <div className="ui grid">
//           <div className="eleven wide column">
//             <VideoDetail video={this.state.selectedVideo}/>
//           </div>
//           <div className="five wide column">
//             <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
export default VideoPage;