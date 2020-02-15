import React from 'react';

function HeaderMenuItem(props) {
    console.log(props);
    return (
        <li>
            <a href={props.headerMenuItem.link}>{props.headerMenuItem.text}</a>
        </li>
    );
}

export default HeaderMenuItem;
