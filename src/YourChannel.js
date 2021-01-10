import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import './YourChannel.css'
function YourChannel() {
    return (
        <div className="YourChannel">
            <div className="YourChannel__container">
            <div className="YourChannel__profile">
                <Avatar style={{width:'80px',height:'80px'}} src="https://yt3.ggpht.com/ytc/AAUvwnikor-dOpVipQgsLiSQax5vh2wf4-yYNZDIhQ=s88-c-k-c0x00ffffff-no-rj"/>
                <div className="YourChannel__info">
                <h4>Aura</h4>
                <p>3 subscribers</p>
                </div>
            </div>
            <div className="YourChannel__buttons">
            <button type="button">Customize Channel</button>
            <button type="button">Manage Videos</button>
            </div>
            </div>
            <div className="YourChannel__navbar">
                <div className="YourChannel__navbar__links">
                    <h4 className="YourChannel__links">Home</h4>
                    <h4 className="YourChannel__links">Video</h4>
                    <h4 className="YourChannel__links">Playlists</h4>
                    <h4 className="YourChannel__links">Channels</h4>
                    <h4 className="YourChannel__links">Discussion</h4>
                    <h4 className="YourChannel__links">About</h4>
                </div>
            </div>
            <div className="YourChannel__content">
                <Avatar style={{width:"80px" ,height:'80px',marginBottom:'15px'}}/>
                <h4>Upload a video to get started</h4>
                <p>Start sharing your story and connecting with viewers. Videos you upload will show up here.</p>
                <button type="button">Upload Video</button>
            </div>
        </div>
    )
}

export default YourChannel
