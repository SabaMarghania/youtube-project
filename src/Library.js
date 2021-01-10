import React from 'react';
import './Library.css';
import HistoryIcon from '@material-ui/icons/History';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LibraryPlaylist from './LibraryPlaylist.js';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {BrowserRouter as Router,Switch,Link, Route} from "react-router-dom";

function Library() {
    return (
        <div className="Library">
            <div className="Library__top">
            <HistoryIcon style={{color:'#706e6e'}} />
            <h3>History</h3>
            </div>
            <p>Videos you watch will show up here. </p>
            <hr/>

             <div className="Library__playlist">
                <div className="Library__playlistTop">
                    <PlaylistPlayIcon style={{fontSize:'26px', color:'#706e6e'}}/>
                    <h3>Playlists</h3>
                     <p>Recently added</p>
                     <ArrowDropDownIcon style={{marginTop:'2px'}}/>
                  </div>
                <div className="Library__video">
                  <LibraryPlaylist
                  image='https://i.ytimg.com/vi/jKxPUes_zW8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBlfwd_uj6hHofNcdjt1_ZLdbekZQ'
                  Channel='Arrested Youth'
                  viewList='View full playlist'
                  title='Top Tracks - Arrested Youth'
                  />
                  <LibraryPlaylist
                  image='https://i.ytimg.com/vi/jKxPUes_zW8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBlfwd_uj6hHofNcdjt1_ZLdbekZQ'
                  Channel='Arrested Youth'
                  viewList='View full playlist'
                  title='Top Tracks - Arrested Youth'
                  />
                  <LibraryPlaylist
                  image='https://i.ytimg.com/vi/jKxPUes_zW8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBlfwd_uj6hHofNcdjt1_ZLdbekZQ'
                  Channel='Arrested Youth'
                  viewList='View full playlist'
                  title='Top Tracks - Arrested Youth'
                  />
                  <LibraryPlaylist
                  image='https://i.ytimg.com/vi/jKxPUes_zW8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBlfwd_uj6hHofNcdjt1_ZLdbekZQ'
                  Channel='Arrested Youth'
                  viewList='View full playlist'
                  title='Top Tracks - Arrested Youth'
                  />
             </div>
             <hr/>
              <div className="Library__likedVideos">
              <div className="Library__LikedVidsTop">
              <ThumbUpIcon style={{color:'#8b8a8a',position:'absolute'}}/>
                  <h3 className="Library__txt" style={{marginLeft:'35px'}} >Liked videos</h3>

                  <Link to="/likedVideos" style={{textDecoration:'none'}}>
                  <div className="Library__seeAll">See all</div>
                  </Link>

              </div>

              <div className="Library__VideosRow">
              
           <LibraryPlaylist
            image='https://i.ytimg.com/vi/fOLT6UYrFmw/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBAzMqyG8b0ZMo298KmPBrG63Juaw '
            Channel='redzerg'
            viewList='1,2K views'
            timestamp='2 weeks ago'
            title='მიღალატეს !!! ვითამაშოთ Cyberpunk 2077 ნაწილი 14 - ქართულად 👀'
           />
           <LibraryPlaylist
            image='https://i.ytimg.com/vi/4UZrsTqkcW4/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDgMuBOQMcXB9h7jiZKDakjYXyFog'
            Channel='freeCodeCamp.org'
            viewList='334K views'
            timestamp='2 months ago'
            title='Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks'
           /><LibraryPlaylist
           image='https://i.ytimg.com/vi/HfGD5xRIiMU/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDvwtF1tAGMqZEmwvZlhJOeaatjfQ'
           Channel='IT-KAMASUTRA'
           viewList='40 тыс. просмотров'
           timestamp='1 year ago'
           title='22. Уроки React JS (Route exact) - react курсы бесплатно'
          /><LibraryPlaylist
          image='https://i.ytimg.com/vi/HfGD5xRIiMU/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDvwtF1tAGMqZEmwvZlhJOeaatjfQ'
          Channel='IT-KAMASUTRA'
          viewList='42K views'
          timestamp='1 year ago'
          title='21. Уроки React JS (Верстаем страницу Диалогов) - react курсы бесплатно '
         />
           </div>
             </div>
             </div>
        </div>

    )
}

export default Library
