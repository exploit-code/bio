import React from 'react';
import avatar from '../../../../pictures/avatar.jpeg';
import './HeaderAvatar.css';

let HeaderAvatar = () => {
    return (
        <div className='header__avatar-box'>
            <img className='header__avatar-img' src={avatar} alt='avatar' />
        </div>
    );
}
export default HeaderAvatar;