import React from 'react';
import LogoSmile from './smile.svg';

function Logo() {
    return (
        <div className='logo'>
            <img src={LogoSmile} alt="Logo"/>
        </div>
    );
}

export default Logo;
