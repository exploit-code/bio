import React from 'react';
import './Certificates.css';
import Title from '../Title/Title';
import Certificate from './CertificateCard/CertificateCard';
import iconCards1 from '../../../../pictures/icon_1.png';
import iconCards2 from '../../../../pictures/icon_2.png';
import iconCards3 from '../../../../pictures/icon_3.png';
import iconCards5 from '../../../../pictures/icon_5.png';
import iconCards6 from '../../../../pictures/icon_6.png';
import iconCards7 from '../../../../pictures/icon_7.png';
import certificate1 from '../../../../pictures/certificates/basics.jpg';
import certificate2 from '../../../../pictures/certificates/git.jpg';
import certificate3 from '../../../../pictures/certificates/geekbrains_html_css.jpg';
import certificate4 from '../../../../pictures/certificates/geekbrains_js_elementary.jpg';
import certificate5 from '../../../../pictures/certificates/coursera_html_css.jpg';
import certificate6 from '../../../../pictures/certificates/coursera_js.jpg';

const dataCards = [
    { icon: iconCards3, organization: 'GeekBrains', technology: 'Основы программирования.', imgSrc: certificate1 },
    { icon: iconCards5, organization: 'GeekBrains', technology: 'Git.', imgSrc: certificate2 },
    { icon: iconCards6, organization: 'GeekBrains', technology: 'HTML & CSS.', imgSrc: certificate3 },
    { icon: iconCards7, organization: 'GeekBrains', technology: 'Javascript.', imgSrc: certificate4 },
    { icon: iconCards1, organization: 'Coursera', technology: 'HTML & CSS.', imgSrc: certificate5 },
    { icon: iconCards2, organization: 'Coursera', technology: 'JavaScript.', imgSrc: certificate6 },
];

const cardItem = dataCards.map((item, index) => {
    return <Certificate cardItem={item} key={index} />
}
);

let Certificates = () => {
    return (
        <div className='about_certificates'>
            <Title title={'Пройденные тесты и курсы:'} />
            <div className='certificate_cards'>
                {cardItem}
            </div>
        </div>
    );
}
export default Certificates;