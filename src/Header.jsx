import React from 'react';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';

function Header(props) {

    return (
        <header>
            <div className="container">
                <Logo />
                <HeaderMenu headerMenuItems ={props.headerMenuItems}/>
            </div>
        </header>
    );
}

export default Header;
