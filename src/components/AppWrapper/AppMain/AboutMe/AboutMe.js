import React from 'react';
import './AboutMe.css';
import about_me_img from '../../../../pictures/reactjs.png';
import Button from './Button/Button';

let AboutMe = () => {
    return (
        <section className='about-me'>
            <div className='about-me__text'>
                <h1 className='about-me__sup-text'>Привет, меня зовут Александр.<br />Я HTML-верстальщик и начинающий Frontend-разработчик.</h1>
                <div className='about-me__sub-text'>Моё обучение никогда не останавливается, ведь мир не стоит на месте и всегда нужно сохранять актуальность своих знаний.</div>
                <a href='https://t.me/E_xploit' target='// eslint-disable-next-line _blank'>
                    <Button text={'Напиши мне!'} />
                </a>
            </div>
            <div className="about-me__img-box">
                <img className='about-me__img' src={about_me_img} alt='' />
            </div>
        </section>
    );
}
export default AboutMe;