import React, { useRef } from 'react';
import './AppWrapper.css';
import AppHeader from './AppHeader/AppHeader';
import AppMain from './AppMain/AppMain';

let AppWrapper = () => {
  const appWrapperRef = useRef();
  return (
    <div className='app_wrapper' ref={appWrapperRef} >
      <AppHeader fullScreen={appWrapperRef} close={() => {
        if (document.fullscreenElement != null) {
          document.exitFullscreen();
        }
      }} />
      <AppMain />
    </div>
  );
}
export default AppWrapper;
