import React from 'react';
import './AppHeader.css';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import HeaderAvatar from './HeaderAvatar/HeaderAvatar';

let AppHeader = (props) => {
  return (
    <header className='header'>
      <HeaderButtons fullScreen={props.fullScreen} close={props.close} />
      <HeaderAvatar />
    </header>
  );
}
export default AppHeader;