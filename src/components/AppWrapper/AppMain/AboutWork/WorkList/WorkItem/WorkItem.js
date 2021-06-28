import React from 'react';
import { useState } from 'react';
import './WorkItem.css';
import TransparentButton from './TransparentButton/TransparentButton';
import WorkDescription from '../WorkDescription/WorkDescription';

let WorkItem = (props) => {
    const [showDescription, setShow] = useState(false);
    let markerClassName = 'work-list__marker';
    if (props.data.isGreen) {
        markerClassName = 'work-list__marker--green';
    }
    return (
        <>
            <li className='work-list__item' onClick={() => setShow(!showDescription)}>
                <div className='work-list__info'>
                    <div className='work-list__company-box'>
                        <img className='work-list__icon' src={props.data.icon} alt='' />
                        <div className='work-list__company'>{props.data.company}</div>
                    </div>
                    <div className="work-list__position-box">
                        <div className={markerClassName} />
                        <div className='work-list__position'>{props.data.position}</div>
                    </div>
                    <TransparentButton />
                </div>
            </li>
            {showDescription && <WorkDescription data={props.data.description} />}
        </>
    );
}
export default WorkItem;