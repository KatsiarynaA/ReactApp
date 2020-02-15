import React from 'react';

function FooterMenuItem(props) {
    return (
        <li>
            <a href={props.footerMenuItem.link}>{props.footerMenuItem.text}</a>
        </li>
    );
}

export default FooterMenuItem;
