import React from 'react';
import './AboutWork.css';
import AboutTitle from '../Title/Title';
import WorkList from './WorkList/WorkList';

let AboutWork = () => {
    return (
        <div className='about_work'>
            <AboutTitle title={'Опыт работы:'} />
            <WorkList />
        </div>
    );
}
export default AboutWork;