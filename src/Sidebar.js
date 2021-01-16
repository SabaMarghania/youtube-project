import React from 'react'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import SidebarRow from './SidebarRow';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* <Router> */}
            <Link to="/Home" style={{textDecoration: 'none'}} >
                <SidebarRow selected Icon={HomeIcon} title="Home" />
            </Link>
            <Link to="/Trending"  style={{textDecoration: 'none'}}>
                <SidebarRow Icon={WhatshotIcon} title="Trending"/> 
            </Link>
            <Link to="/Subscriptions" style={{textDecoration: 'none'}}>
                <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
            </Link>
            <hr/>
            <Link to="/Library" style={{textDecoration: 'none'}}>
                <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            </Link>
            <Link to="/History" style={{textDecoration: 'none'}}>
                <SidebarRow Icon={HistoryIcon} title="History"/>
            </Link >  
            <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
            <Link style={{textDecoration: 'none'}} to="/WatchLater">
            <       SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
            </Link>
            <Link to="/LikedVideos" style={{textDecoration: 'none'}}>
                <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
            </Link>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
            {/* </Router> */}
            <hr/>
        </div>
    )
}

export default Sidebar;
