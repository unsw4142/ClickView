import React from 'react';

const VideoCategoryItem = (props) => {
  const video = props.video;
  // In case nothing is there
  if(!video){
    return <div><h2>Loading..</h2></div>;
  }

  const onCategorySelect = props.onCategorySelect;
  const catgs = video.category.split("->");

  const renderCatgs = catgs.map((catg,i) =>{
    return <div key = {i}>{catg}</div>;
  });
  // On selecting the category, the video changes.
  return(
    <li onClick= {()=> {onCategorySelect(video)}}>
          {renderCatgs}
    </li>
  );
}
export default VideoCategoryItem;
