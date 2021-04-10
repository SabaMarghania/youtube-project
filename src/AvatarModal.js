import {Link} from "react-router-dom";

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {useState} from 'react';
import Avatar from "@material-ui/core/Avatar";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import './AvatarModal.css'
import { Icon } from '@iconify/react';
import youtubeStudio from '@iconify-icons/mdi/youtube-studio';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import TranslateIcon from '@material-ui/icons/Translate';
import LanguageIcon from '@material-ui/icons/Language';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FeedbackIcon from '@material-ui/icons/Feedback';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import styled,{ ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from "./Theme.js";
// const StyledApp = styled.div`
//   color:${(props) => props.theme.fontColor} ;
// `;

    const Modal = ({show, close,handleClose}) => {
        const [title, setTitle] = useState("Light");
        const [theme, setTheme] = useState('light');
        const themeToggler =()=>{
         theme === "light"? setTheme("dark") : setTheme("light");
       }
       const titleChanger=()=>{
           if(title == "Light"){
               setTitle("Dark");
           }else{
               setTitle("Light");
           }
       }
        return (
        <>
    <ThemeProvider theme={theme==="light" ? lightTheme : darkTheme }>
        <GlobalStyles/>
</ThemeProvider>
            <div className="Modal" >
                    <div style={{
                        background:'#11111',
                        display:show ? 'flex' : 'none',
                    }}>
                        <div className="avatarModal__container">
                        <div className="avatarModal__profile">
                        <span onClick={handleClose} style={{position:'absolute',right:'10px'}} >x</span>
                            <div className="avatarModal__profilePos">
                            <Avatar/>
                            <div className="avatarModal__info">
                            <h4>Testname</h4>
                            <p>testmail@gmail.com</p>
                        </div>
                            </div>
                        <div className="avatarModal__settings">
                            <Link className="avatarModal__link" to="/YourChannel" >
                            <div className="avatarModal__flex">
                            <AccountBoxIcon style={{color:'gray'}}/>
                            <p className="avatarModal__text">Your Channel</p>
                            </div>
                            </Link>
                           
                            <div className="avatarModal__flex">
                                <MonetizationOnIcon style={{color:'gray'}}/>
                             <p className="avatarModal__text">Purchases and memberships</p>
                            </div>
                            <div className="avatarModal__flex">
                            <Icon icon={youtubeStudio} style={{color:'gray',fontSize:'25px'}}/>
                            <p className="avatarModal__text">YouTube Studio</p>
                            </div>
                            <div className='avatarModal__flex'>
                            <SupervisorAccountIcon style={{color:'gray'}}/>
                            <p className="avatarModal__text">Switch account</p>
                            </div>
                             <div className="avatarModal__flex" style={{borderBottom:'1px solid lightgray'}}>
                             <ExitToAppIcon style={{color:'gray'}}/>
                             <p className="avatarModal__text">Sign out</p>
                             </div>

                             <div className="avatarModal__flex">
                            <Brightness4Icon style={{color:'gray'}}/>
                            <button onClick={()=>{themeToggler(); titleChanger()}}
                            className="avatarModal__text">Appearance: {title} <ArrowForwardIosIcon style={{color:'gray',fontSize:'16px',float:'right'}}/></button>
                    {/* <button onClick={() => themeToggler()}>Change Theme</button> */}
                         {/* onClick={() => { func1(); func2();}} */}
                        {/* display:show ? 'flex' : 'none', */}

                            </div>
                            <div className="avatarModal__flex">
                                <TranslateIcon style={{color:'gray'}}/>
                             <p className="avatarModal__text">Language: English</p>
                            </div>
                            <div className="avatarModal__flex">
                            <LanguageIcon style={{color:'gray'}}/>
                            <p className="avatarModal__text">Location: Georgia</p>
                            </div>
                            <div className='avatarModal__flex'>
                            <SettingsIcon style={{color:'gray'}}/>
                            <p className="avatarModal__text">Settings</p>
                            </div>
                             <div className="avatarModal__flex">
                             <AssignmentIndIcon style={{color:'gray'}}/>
                             <p className="avatarModal__text">Your data in YouTube</p>
                             </div>
                             <div className="avatarModal__flex">
                             <HelpIcon style={{color:'gray'}}/>
                             <p className="avatarModal__text">Help</p>
                             </div>
                             <div className="avatarModal__flex">
                             <FeedbackIcon style={{color:'gray'}}/>
                             <p className="avatarModal__text">Send feedback</p>
                             </div>
                             
                        </div>
                        </div>
                        
                        </div>
                    
                    </div>
            </div>
            </>
        )

                }
    

export default Modal
