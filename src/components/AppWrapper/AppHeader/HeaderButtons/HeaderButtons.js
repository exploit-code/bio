import React from 'react';
import './HeaderButtons.css';

let HeaderButtons = (props) => {
    let onGreenClick = () => {
        if (document.fullscreenElement != null) {
            document.exitFullscreen();
        } else if (document.fullscreenEnabled) {
            props.fullScreen.current.requestFullscreen();
        }
    }
    return (
        <div className='header__buttons'>
            <div className='header__button-item header__button-item--red' onClick={props.close} />
            {!props.onlyRed && <div className='header__button-item header__button-item--yellow' />}
            {!props.onlyRed && <div className='header__button-item header__button-item--green' onClick={onGreenClick} />}
        </div>
    );

}
export default HeaderButtons;