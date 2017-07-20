import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  const onVideoSelect = props.onVideoSelect;
  const imageURL = video.thumbnail;

  return(
    <li onClick= {()=> {onVideoSelect(video)}} className = 'list-group-item'>
      <div className = "video-list media">
        <div className = "media-left">
          <img className = "media-object" src = {imageURL}/>
        </div>
        <div className = "media-body">
          <div className = "media-heading">{video.description}</div>
        </div>
      </div>
    </li>
  );
}
export default VideoListItem;
