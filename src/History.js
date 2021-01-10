import React from 'react'
import './History.css';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';
function History() {
    return (
        <div className="History">
            <h4>Watch History</h4>
            <div className="History__container">

            <div className="History__content">
                <p>This list has no videos.</p>
            </div>

            <div className="History__box">
                <h4 style={{fontWeight:'500',marginBottom:'15px',height:'25px',fontSize:'16px'}}>History type</h4>
                <hr/>
                <br/>
                <label class="container">Watch history
                <input type="radio" style={{marginBottom:'15px'}}checked="checked" name="radio"/>
                <span class="checkmark"></span>
                </label>
                <br/>
                <hr/>
                <label class="container" style={{marginTop:'15px'}}>Community
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
                </label>
                <br/>
                <hr/>

                <div class="History__settings">
                    <h4 style={{display:'flex',cursor:'pointer',alignItems:'center',textTransform:'uppercase'}}><DeleteIcon/> Clear all Watch History</h4>
                    <h4 style={{display:'flex',alignItems:'center'}}><SettingsIcon/> Manage All History</h4>
                    <p>Watch and search history</p>
                    <p>Comments</p>
                    <p>Live chat</p>
                </div>
            </div>
            </div>

        </div>
    )
}

export default History
