import React from 'react';
import './WorkDescription.css';

function WorkDescription(props) {

    let workDescriptionItem = props.data.map((item) => {
        return <li key={item}><div />{item}</li>;
    })

    return (
        <li className='work-list__description'>
            <ul className='work-list__description-hidden'>
                {workDescriptionItem}
            </ul>
        </li>
    );
}

export default WorkDescription;