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
                <p>3  подписчика</p>
                </div>
            </div>
            <div className="YourChannel__buttons">
            <button type="button">Настроить Вид Канала</button>
            <button type="button">Управлять Видео</button>
            </div>
            </div>
            <div className="YourChannel__navbar">
                <div className="YourChannel__navbar__links">
                    <h4 className="YourChannel__links">Главная</h4>
                    <h4 className="YourChannel__links">Видео</h4>
                    <h4 className="YourChannel__links">Плейлисты</h4>
                    <h4 className="YourChannel__links">Каналы</h4>
                    <h4 className="YourChannel__links">Обсуждение</h4>
                    <h4 className="YourChannel__links">О Канале</h4>
                </div>
            </div>
            <div className="YourChannel__content">
                <Avatar style={{width:"80px" ,height:'80px',marginBottom:'15px'}}/>
                <h4>Загрузите свое первое видео</h4>
                <p>Здесь будут собраны видео, которые вы загрузите.</p>
                <button type="button">Добавить Видео</button>
            </div>
        </div>
    )
}

export default YourChannel
