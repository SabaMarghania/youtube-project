 import React,{useState} from 'react'
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
// import YT from './yt.png';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar";
import Modal from './AvatarModal';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Header() {
    const[inputSearch,setInputSearch]= useState('');
    const[show,setShow] = useState(false);
    const close =()=>setShow(false);


    return (
        <div className='header'>
            <div className="header__left">
            <Link to="/Home" style={{textDecoration:'none',color:'#676767',display:'flex'}}> 
            <MenuIcon/>
            <h4 className="header__icon"><YouTubeIcon style={{color:'red'}}/>YouTube</h4>
             </Link>
        </div>
    {/* Search system */}
        <div className="header__input">

        <input value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)}
         type='text' 
         placeholder="Search"
         />
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header__inputButton"/>
        </Link>
        </div>
        <div className="header__icons">
        <VideoCallIcon className="header__icon"/>
        <AppsIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        </div>
        </div>
    )
}

export default Header;
