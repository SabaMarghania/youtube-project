import React from 'react'
import './History.css';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';
function History() {
    return (
        <div className="History">
            <h4>История просмотра</h4>
            <div className="History__container">

            <div className="History__content">
                <p>В этом списке нет видео.</p>
            </div>

            <div className="History__box">
                <h4 style={{fontWeight:'500',marginBottom:'15px',height:'25px',fontSize:'16px'}}>Тип данных</h4>
                <hr/>
                <br/>
                <label class="container">История просмотра
                <input type="radio" style={{marginBottom:'15px'}}checked="checked" name="radio"/>
                <span class="checkmark"></span>
                </label>
                <br/>
                <hr/>
                <label class="container" style={{marginTop:'15px'}}>Записи в сообществе
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
                </label>
                <br/>
                <hr/>

                <div class="History__settings">
                    <h4 style={{display:'flex',cursor:'pointer',alignItems:'center',textTransform:'uppercase'}}><DeleteIcon/>Очистить историю просмотра</h4>
                    <h4 style={{display:'flex',alignItems:'center'}}><SettingsIcon/>Посмотреть историю на странице "Мои действия" </h4>
                    <p>Просмотр и поиск</p>
                    <p>Комментарии</p>
                    <p>Чат</p>
                </div>
            </div>
            </div>

        </div>
    )
}

export default History
