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
        <div className='header_buttons'>
            <div className='red' onClick={props.close} />
            {!props.onlyRed && <div className='yellow' />}
            {!props.onlyRed && <div className='green' onClick={onGreenClick} />}
        </div>
    );

}
export default HeaderButtons;