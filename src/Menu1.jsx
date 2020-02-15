import React from 'react';
import MenuItem from './MenuItem';


function Menu1(props) {

    return (
        <nav>
            <ul>
                {props.menuItems1.map(el => <MenuItem key={el.text} menuItem={el}/>)}
            </ul>

        </nav>
    );
}

export default Menu1;
