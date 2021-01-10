import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import './VideoRow.css';
function VideoRow({views,avatar,subs,description,timestamp,channel,title,image}) {
    return (
        <div className="videoRow">
            <img className="videoRow__image" src={image} alt=''/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__description">{views} • {timestamp}</p>
                <div className="videoRow__profile">
                  <Avatar className="videoRow__img" src={avatar}/>
                  <p className="videoRow__channel">{channel}</p>
                </div>
                 
               
                <p>{description}</p>
            </div>
        </div>
    )
}
export default VideoRow
