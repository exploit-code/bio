import React from 'react';
import './Button.css';

let Button = (props) => {
    return (
        <button className='button'>{props.text}</button>
    );
}
export default Button;