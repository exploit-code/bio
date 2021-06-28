import React from 'react';
import { useState } from 'react';
import './CertificateCard.css';
import Button from '../../AboutMe/Button/Button';
import ModalWindow from '../../ModalWindow/ModalWindow';

let CertificateCard = (props) => {
    const [showCertificate, setShow] = useState(false);
    const closeCertificate = () => {
        setShow(false);
    }
    return (
        <div className='certificate-cards__item' onClick={() => setShow(!showCertificate)}>
            <div className='certificate-cards__top-box'>
                <img className='certificate-cards__icon' src={props.cardItem.icon} alt='' />
                <div>{props.cardItem.organization}</div>
            </div>
            <div className='certificate-cards__description'>{props.cardItem.technology}</div>
            <div className='certificate-cards__button-box'>
                <Button text='Посмотреть сертификат' />
            </div>
            {showCertificate && <ModalWindow close={closeCertificate} imgSrc={props.cardItem.imgSrc} />}
        </div>
    )
}
export default CertificateCard;