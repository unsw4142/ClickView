import React from 'react';

const VideoDescp = ({video}) => {
  // Check that video is provided
  // if(!video){
  //   return <div><h2>Loading..</h2></div>;
  // }

  const url = video.thumbnail;

  return(
    <div className="col-md-8">
      <div className="thumbnail">
        <img className="img-responsive" src = {url} />
      </div>
      <div className="details">
        <div>{video.name}</div>
        <div>{video.description}</div>
      </div>
    </div>
  );
}
export default VideoDescp;
