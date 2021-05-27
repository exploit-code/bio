import React from 'react';
import './WorkDescription.css';

function WorkDescription(props) {

    let workDescriptionItem = props.data.map((item) => {
        return <li key={item}><div />{item}</li>;
    })

    return (
        <li className='work_description'>
            <ul className='hidden_work_info'>
                {workDescriptionItem}
            </ul>
        </li>
    );
}

export default WorkDescription;