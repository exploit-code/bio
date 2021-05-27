import React from 'react';
import HeaderButtons from '../../AppHeader/HeaderButtons/HeaderButtons';
import './ModalWindow.css';

let ModalWindow = (props) => {
    return (
        <div className="overlay_app">
            <div className="pop_up" onClick={(event) => event.stopPropagation()}>
                <HeaderButtons close={props.close} onlyRed />
                <div className="popup_content">
                    <img className="certificate_img" src={props.imgSrc} alt='' />
                </div>
            </div>
        </div>
    );
}
export default ModalWindow;