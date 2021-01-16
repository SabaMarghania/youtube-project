import React from "react";
import Sidebar from '../Sidebar';
import './VideoDetail.css'
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import RecommendedVideo from '../RecommendedVideo';
import { Avatar } from "@material-ui/core";
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
       
       <Route path='/Home'>
            <div className="app__page">
            <Sidebar/>
            </div>
            </Route>
     
       
    </div>;
  }else{
  
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div className="VideoDetails">
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header__title">{video.snippet.title}</h4>
        <div className="VideoDetails__info">
        <Avatar/>
        <p style={{marginLeft:'15px'}}>{video.snippet.channelTitle}</p>
        </div>
        <p className="Video__text">{video.snippet.description}</p>

      </div>
    </div>
  );
  }

};

export default VideoDetail;