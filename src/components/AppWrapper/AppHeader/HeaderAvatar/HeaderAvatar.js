import React from 'react';
import avatar from '../../../../pictures/avatar.jpeg';
import './HeaderAvatar.css';

let HeaderAvatar = () => {
    return (
        <div className='header_avatar'>
            <img className='avatar_img' src={avatar} alt='avatar' />
        </div>
    );
}
export default HeaderAvatar;