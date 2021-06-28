import React from 'react';
import HeaderButtons from '../../AppHeader/HeaderButtons/HeaderButtons';
import './ModalWindow.css';

let ModalWindow = (props) => {
    return (
        <div className="overlay-app">
            <div className="pop-up" onClick={(event) => event.stopPropagation()}>
                <HeaderButtons close={props.close} onlyRed />
                <div className="pop-up__content">
                    <img className="pop-up__img" src={props.imgSrc} alt='' />
                </div>
            </div>
        </div>
    );
}
export default ModalWindow;