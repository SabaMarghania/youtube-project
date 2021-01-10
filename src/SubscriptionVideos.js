import React from 'react'
import './SubscriptionVideos.css'
function SubscriptionVideos({image,title,channel,views,timestamp,time}) {
    return (
        <div className="Subscription">
        <div className="Subscription__cont">
        <div className="Subscription__image">
        <img  src={image} alt=''/>
        <span class="Subscription__time">{time}</span>
    </div>
    <div className="Subscription__text">
        <h3 className="Subscription__title">{title}</h3>
        <p className="Subscription__info">{channel} <br/> {views} • {timestamp}</p>
       
    </div>
    </div>
    </div>
    )
}

export default SubscriptionVideos
