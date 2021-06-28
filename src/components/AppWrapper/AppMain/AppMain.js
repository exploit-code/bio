import React from 'react';
import './AppMain.css';
import AboutMe from './AboutMe/AboutMe';
import AboutWork from './AboutWork/AboutWork';
import Certificates from './Certificates/Certificates';

let AppMain = () => {
    return (
        <main className="main">
            <AboutMe />
            <AboutWork />
            <Certificates />
        </main>
    );
}
export default AppMain;