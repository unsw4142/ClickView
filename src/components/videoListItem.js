import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  const onVideoSelect = props.onVideoSelect;
  const imageURL = video.thumbnail;
  // Style in styles.css
  return(
    <li onClick= {()=> {onVideoSelect(video)}} className = 'list-group-item'>
      <div className = "video-list media">
          <img className = "media-object" src = {imageURL} width="100%" height="100%"/>
        <div className = "media-body">
          <div className = "media-heading">{video.description}</div>
        </div>
      </div>
    </li>
  );
}
export default VideoListItem;
