import React from 'react'
import './LikedVideos.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import LikedVideosRow from './LikedVideosRow';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Avatar from "@material-ui/core/Avatar";

function LikedVideos() {
    return (
        <div className="LikedVideos">
            <div className="LikedVideos__container">
                <div className="LikedVideos__thumbnail">
                <img src="https://i.ytimg.com/vi/fOLT6UYrFmw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCwQ1FZYVeGK2JNrqVvhfxo8Byliw" alt=''/>
                 <div className="LikedVideos__playAll">
                     <PlayArrowIcon/>
                     Play All
                 </div>
               </div>
            <div className="LikedVideos__info">
                <h2>Liked videos</h2>
                <div className="LikedVideos__activities">
                    44 videos • No views • Last updated on Dec 12,2020
                </div>
                <ShuffleIcon style={{color:'#5c5c5c',fontSize:'30px', marginBottom:'15px'}}/>
             <hr/>

            </div>

             <div className="LikedVideos__avatar">
                <Avatar src="https://yt3.ggpht.com/ytc/AAUvwnikor-dOpVipQgsLiSQax5vh2wf4-yYNZDIhQ=s88-c-k-c0x00ffffff-no-rj"/>
                <h4>Aura</h4>
             </div>

            </div>

            <div className="LikedVideos__cont">
        <div className="LikedVideos__videos">
        <LikedVideosRow
        image='https://i.ytimg.com/vi/fOLT6UYrFmw/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBAzMqyG8b0ZMo298KmPBrG63Juaw'
        time='33:53'
        timestamp='1 week ago'
        channel='redzerg'
        title='მიღალატეს !!! ვითამაშოთ Cyberpunk 2077 ნაწილი 14 - ქართულად 👀'
        views='1.1K views'
        />
        <LikedVideosRow
        image='https://i.ytimg.com/vi/fOLT6UYrFmw/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBAzMqyG8b0ZMo298KmPBrG63Juaw'
        time='33:53'
        timestamp='1 week ago'
        channel='redzerg'
        title='მიღალატეს !!! ვითამაშოთ Cyberpunk 2077 ნაწილი 14 - ქართულად 👀'
        views='1.1K views'
        />
        <LikedVideosRow
        image='https://i.ytimg.com/vi/fOLT6UYrFmw/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBAzMqyG8b0ZMo298KmPBrG63Juaw'
        time='33:53'
        timestamp='1 week ago'
        channel='redzerg'
        title='მიღალატეს !!! ვითამაშოთ Cyberpunk 2077 ნაწილი 14 - ქართულად 👀'
        views='1.1K views'
        />
        <LikedVideosRow
        image='https://i.ytimg.com/vi/fOLT6UYrFmw/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBAzMqyG8b0ZMo298KmPBrG63Juaw'
        time='33:53'
        timestamp='1 week ago'
        channel='redzerg'
        title='მიღალატეს !!! ვითამაშოთ Cyberpunk 2077 ნაწილი 14 - ქართულად 👀'
        views='1.1K views'
        />
        <LikedVideosRow 
        image='https://i.ytimg.com/vi/fOLT6UYrFmw/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBAzMqyG8b0ZMo298KmPBrG63Juaw'
        time='33:53'
        timestamp='1 week ago'
        channel='redzerg'
        title='მიღალატეს !!! ვითამაშოთ Cyberpunk 2077 ნაწილი 14 - ქართულად 👀'
        views='1.1K views'
        />
        <LikedVideosRow
        image='https://i.ytimg.com/vi/fOLT6UYrFmw/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBAzMqyG8b0ZMo298KmPBrG63Juaw'
        time='33:53'
        timestamp='1 week ago'
        channel='redzerg'
        title='მიღალატეს !!! ვითამაშოთ Cyberpunk 2077 ნაწილი 14 - ქართულად 👀'
        views='1.1K views'
        />
         <LikedVideosRow
        image='https://i.ytimg.com/vi/fOLT6UYrFmw/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBAzMqyG8b0ZMo298KmPBrG63Juaw'
        time='33:53'
        timestamp='1 week ago'
        channel='redzerg'
        title='მიღალატეს !!! ვითამაშოთ Cyberpunk 2077 ნაწილი 14 - ქართულად 👀'
        views='1.1K views'
        />
         <LikedVideosRow
        image='https://i.ytimg.com/vi/fOLT6UYrFmw/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBAzMqyG8b0ZMo298KmPBrG63Juaw'
        time='33:53'
        timestamp='1 week ago'
        channel='redzerg'
        title='მიღალატეს !!! ვითამაშოთ Cyberpunk 2077 ნაწილი 14 - ქართულად 👀'
        views='1.1K views'
        />
    </div>
    </div>
    </div>
    )
}

export default LikedVideos
