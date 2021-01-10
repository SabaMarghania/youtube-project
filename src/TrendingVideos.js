import React from 'react'
import './TrendingVideos.css'
function TrendingVideos({image,views,timestamp,channel,title,description,time}) {
    return (
        <div className="TrendingVideos">
        
        <div className="TrendingVideos__image">
            <img  src={image} alt=''/>
            <span class="Trending__time">{time}</span>
        </div>
        <div className="TrendingVideos__text">
            <h3 className="TrendingVideos__title">{title}</h3>
            <p className="TrendingVideos__info">{channel} • {views} • {timestamp}</p>
           
            <p className="TrendingVideos__description">{description}</p>
        </div>
    </div>
    )
}

export default TrendingVideos
