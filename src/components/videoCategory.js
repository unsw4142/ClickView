import React from 'react';
import VideoCategoryItem from './videoCategoryItem';

const VideoCategory = (props) => {
    const videos = props.videos;
    const categories = videos.map((video) => {
        return(
          <VideoCategoryItem
            key = {video.id}
            video= {video}
          />
        );
    });

    return(
      <div className="video-category col-md-4">
        {categories}
      </div>
    );

}

export default VideoCategory;
