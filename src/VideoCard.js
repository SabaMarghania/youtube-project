import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import './VideoCard.css'
function VideoCard({image,title,channel,views,timestamp,channelImage}) {
    return (
        <div className="VideoCard">
            <div className="videocard__cont">
            <img className="videocard__thumbnail" src={image} alt="" />
            <span className="time">21:15</span>
            </div>
            <div className="video__info">
                <Avatar
                className="videoCard__avatar" 
                alt={channel}
                src={channelImage} 
                 />
                <div className="video__text">
                    <h4>{title}</h4>
                    <div className="video__bottom">
                    <p>{channel}</p>
                    <p>
                      {views} • {timestamp}
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
