import React from 'react';
import FooterMenuItem from './FooterMenuItem';


function FooterMenu(props) {

    return (
        <nav>
            <ul>
                {props.footerMenuItems.map(el => <FooterMenuItem key={el.text} footerMenuItem={el}/>)}
            </ul>
        </nav>
    );
}

export default FooterMenu;
