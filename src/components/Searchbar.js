import React from 'react';
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
// import YT from './yt.png';
import '../Header.css';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar";
import Modal from '../AvatarModal';
import YouTubeIcon from '@material-ui/icons/YouTube';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }
    constructor() {
      super();
      this.state = {
        show: false
      };
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }
  
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
   
    render() {
        
        return (
          
<div className='header'>
<div className="header__left" >
<MenuIcon/>
<Link to="/youtube-project/" style={{textDecoration:'none'}}>
<h4 className="header__icon" style={{color:'#676767'}}><YouTubeIcon style={{color:'red'}}/>YouTube</h4>
</Link>
</div>
{/* Search system */}
<form onSubmit={this.handleSubmit}>

<div className="header__input">
<Link to="/search">
<input onChange={this.handleChange}
type='text' 
placeholder="Search"
/>
</Link>
</div>
<SearchIcon onClick={this.handleSubmit} className="header__inputButton"/>

</form>
<div className="header__icons">
<VideoCallIcon className="header__icon"/>
<AppsIcon className="header__icon"/>
<NotificationsIcon className="header__icon"/>
<Avatar  onClick={e => {
              this.showModal();
         }}style={{marginLeft:'20px'}} />
<Modal onClick={this.showModal} show={this.state.show} handleClose={this.hideModal}/>
</div>
</div>
        )
    }
}
export default Searchbar;
