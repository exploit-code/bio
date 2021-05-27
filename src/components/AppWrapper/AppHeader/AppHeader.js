import React from 'react';
import './AppHeader.css';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import HeaderAvatar from './HeaderAvatar/HeaderAvatar';

let AppHeader = (props) => {
  return (
    <div className='app_header'>
      <HeaderButtons fullScreen={props.fullScreen} close={props.close} />
      <HeaderAvatar />
    </div>
  );
}
export default AppHeader;