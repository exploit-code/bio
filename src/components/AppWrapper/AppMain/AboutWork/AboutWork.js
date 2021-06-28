import React from 'react';
import AboutTitle from '../Title/Title';
import WorkList from './WorkList/WorkList';

let AboutWork = () => {
    return (
        <section className='about-work'>
            <AboutTitle title={'Опыт работы:'} />
            <WorkList />
        </section>
    );
}
export default AboutWork;