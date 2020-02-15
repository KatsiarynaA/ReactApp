import React from 'react';
import HeaderMenuItem from './HeaderMenuItem';


function HeaderMenu(props) {

    return (
        <nav>
            <ul>
                {props.headerMenuItems.map(el => <HeaderMenuItem key={el.text} headerMenuItem={el}/>)}
            </ul>
        </nav>
    );
}

export default HeaderMenu;
