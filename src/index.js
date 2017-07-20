import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import VideoList from './components/videoList';
import VideoDescp from './components/videoDescp';
import videos from './videos';
import VideoCategory from './components/videoCategory';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedVideo: videos[0],
    };
  }
  // At start, the slected video is the first video in the list
  render(){
    return(
      <div>
        <VideoDescp video = {this.state.selectedVideo}/>

        <VideoList
          onVideoSelect = {selectedVideo => (this.setState({selectedVideo}))}
          videos = {videos}/>
        <div className= "categories">
          <div><h2>All Categories</h2></div>
          <VideoCategory videos = {videos} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
