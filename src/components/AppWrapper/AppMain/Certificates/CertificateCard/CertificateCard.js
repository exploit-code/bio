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
        <div className='certificate_card' onClick={() => setShow(!showCertificate)}>
            <div className='icon_certificate_container'>
                <img className='icon_certificate' src={props.cardItem.icon} alt='' />
                <div>{props.cardItem.organization}</div>
            </div>
            <div className='certificate_card_subtext'>{props.cardItem.technology}</div>
            <div className='app_card_buttons'>
                <Button text='Посмотреть сертификат' />
            </div>
            {showCertificate && <ModalWindow close={closeCertificate} imgSrc={props.cardItem.imgSrc} />}
        </div>
    )
}
export default CertificateCard;