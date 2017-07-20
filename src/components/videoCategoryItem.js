import React from 'react';

const VideoCategoryItem = (props) => {
  const video = props.video;
  // In case nothing is there
  if(!video){
    return <div><h2>Loading..</h2></div>;
  }

  //const onCatgsSelect = props.onVideoSelect;
  const catgs = video.category.split("->");
  const renderCatgs = catgs.map((catg,i) =>{
    return <li key = {i}>{catg}</li>;
  });

  return(
      <div className = "catgs-list">
          {renderCatgs}
      </div>
  );
}
export default VideoCategoryItem;
