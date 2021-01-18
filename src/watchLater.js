import React from 'react'
import './watchLater.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Avatar from "@material-ui/core/Avatar";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function LikedVideos() {
    return (
        <div className="watchLater">
            <div className="watchLater__container">
                <div className="watchLater__thumbnail">
                <img src="https://i.ytimg.com/img/no_thumbnail.jpg" alt=''/>
                 <div className="watchLater__playAll">
                     <PlayArrowIcon/>
                     ВОСПРОИЗВЕСТИ ВСЕ
                 </div>
               </div>
            <div className="watchLater__info">
                <h2>Смотреть позже</h2>
                <div className="watchLater__activities">
                Нет видео • Нет просмотров • Обновлен 5 янв. 2021
                </div>
                <MoreHorizIcon  style={{color:'#5c5c5c',fontSize:'30px',marginBottom:'15px'}}/>
             <hr/>

            </div>

             <div className="watchLater__avatar">
                <Avatar src="https://yt3.ggpht.com/ytc/AAUvwnikor-dOpVipQgsLiSQax5vh2wf4-yYNZDIhQ=s88-c-k-c0x00ffffff-no-rj"/>
                <h4>Aura</h4>
             </div>

            </div>

            <div className="watchLater__cont">
        <div className="watchLater__videos" style={{display:'flex',alignItems:'center'}}>
         <p>В этом плейлисте нет видео.</p>
    </div>
    </div>
    </div>
    )
}

export default LikedVideos;
