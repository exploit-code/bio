import React from 'react';
import { useState } from 'react';
import './WorkItem.css';
import TransparentButton from './TransparentButton/TransparentButton';
import WorkDescription from '../WorkDescription/WorkDescription';

let WorkItem = (props) => {
    const [showDescription, setShow] = useState(false);
    let markerClassName = 'marker';
    if (props.data.isGreen) {
        markerClassName = 'green_marker';
    }
    return (
        <>
            <li className='work_item' onClick={() => setShow(!showDescription)}>
                <div className='work_info'>
                    <div className='company_block'>
                        <img className='icon' src={props.data.icon} alt='' />
                        <div className='company'>{props.data.company}</div>
                    </div>
                    <div className="position_block">
                        <div className={markerClassName} />
                        <div className='position'>{props.data.position}</div>
                    </div>
                    <TransparentButton />
                </div>
            </li>
            {showDescription && <WorkDescription data={props.data.description} />}
        </>
    );
}
export default WorkItem;