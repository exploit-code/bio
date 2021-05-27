import React from 'react';
import './AboutMe.css';
import about_me_img from '../../../../pictures/reactjs.png';
import Button from './Button/Button';

let AboutMe = () => {
    return (
        <div className='about_me'>
            <div className='about_me_text'>
                <h1 className='sup_text'>Привет, меня зовут Александр.<br />
                    Я HTML-верстальщик и начинающий frontend-разработчик.
                </h1>
                <div className='sub_text'>Моё обучение никогда не останавливается, ведь мир не стоит на месте и всегда нужно сохранять актуальность своих знаний.</div>
                <a href='https://t.me/E_xploit' target='// eslint-disable-next-line _blank'>
                    <Button text={'Напиши мне!'} />
                </a>
            </div>
            <img className='about_me_img' src={about_me_img} alt='' />
        </div>
    );
}
export default AboutMe;