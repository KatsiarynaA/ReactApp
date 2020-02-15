import React from 'react';
import MenuItem from './MenuItem';


function Menu2(props) {

    return (
        <nav>
            <ul>
                {props.menuItems2.map(el => <MenuItem key={el.text} menuItem={el}/>)}
            </ul>

        </nav>
    );
}

export default Menu2;
