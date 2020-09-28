import React from 'react'
import youtube from '../apis/youtube';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';

class VideoPage extends React.Component{

  state = {videos: [], selectedVideo: null};

  componentDidMount(){
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('search', {
      params: {
        q: term
      }
    });
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  };

  render(){
    return(
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="five wide column">
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
          </div>
        </div>
      </div>
    );
  }
}
export default VideoPage;