import React from 'react'
import LikedVideos from './LikedVideos';
import './LikedVideosRow.css'
function LikedVideosRow({image,time,channel,title}) {
    return (
        <div className="LikedVideosRow"> 
         <div className="LikedVideosRow__cont">
        <span className="LikedVideosRow__number">1</span>
        <div className="LikedVideosRow__image">
        <img  src={image} alt=''/>
        <span class="LikedVideosRow__time">{time}</span>
    </div>
    <div className="LikedVideosRow__text">
        <h3 className="LikedVideosRow__title">{title}</h3>
        <p className="LikedVideosRow__info">{channel} </p>
       
    </div>
    </div>
    <hr/>
        </div>
    )
}

export default LikedVideosRow
