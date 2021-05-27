import React from 'react';
import './AppMain.css';
import AboutMe from './AboutMe/AboutMe';
import AboutWork from './AboutWork/AboutWork';
import Certificates from './Certificates/Certificates';

let AppMain = () => {
    return (
        <div className="app_main">
            <AboutMe />
            <AboutWork />
            <Certificates />
        </div>
    );
}
export default AppMain;