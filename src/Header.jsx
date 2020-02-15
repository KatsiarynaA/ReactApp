import React from 'react';
import Logo from './Logo';
import Menu1 from './Menu1';

function Header(props) {

    return (
        <header>
            <div className="container">
                <Logo />
                <Menu1 menuItems1 ={props.menuItems1}/>
            </div>
        </header>
    );
}

export default Header;
