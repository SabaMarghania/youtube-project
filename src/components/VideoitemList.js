import React from 'react';
// import '../style/video.css';
import '../VideoRow.css'
import Avatar from "@material-ui/core/Avatar";

const VideoItemList = ({video , handleVideoSelect}) => {
    return (
       
        <div onClick={ () => handleVideoSelect(video)} className="videoRow">
<img className="videoRow__image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
<div className="videoRow__text">
    <h3>{video.snippet.title}</h3>
    {/* <p className="videoRow__description">{views} • {timestamp}</p> */}
    <div className="videoRow__profile">
      <Avatar className="videoRow__img" src={video.snippet.thumbnails.default.url}/>
      <p className="videoRow__channel">{video.snippet.channelTitle}</p>
    </div>
     
    {/* <p>{video.snippet.description}</p> */}
</div>
</div>
    )
};
export default VideoItemList;
