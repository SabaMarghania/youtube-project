import React from 'react'
import './LibraryPlaylist.css'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
function LibraryPlaylist({image,Channel,viewList,title,timestamp}) {
    return (
        <div className="LibraryPlaylist" >
        <div className="LibraryPlaylist__container">

            <div className="LibraryPlaylist__image">
            <div className="LibraryPlaylist__count" >
                <img  src={image} alt=''/>
                {/* <div className="LibraryPlaylist__PN">
                 <span>19</span>
                 <PlaylistPlayIcon style={{fontSize:'28px'}} />
                </div> */}
            </div>
        </div>
        <div className="LibraryPlaylist__text">
            <h3 className="LibraryPlaylist__title">{title}</h3>
            <p className="LibraryPlaylist__info">{Channel} </p>
            <p className="LibraryPlaylist__info">{viewList} •</p>
            <p className="LibraryPlaylist__info">{timestamp}</p>
           
        </div>
        </div>
        </div>
    )
}

export default LibraryPlaylist
