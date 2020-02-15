import React from 'react';
import Logo from './Logo';
import FooterMenu from "./FooterMenu";

function Footer(props) {

    return (
        <footer>
            <div className="container">
                <Logo />
                <FooterMenu footerMenuItems={props.footerMenuItems1}/>
                <FooterMenu footerMenuItems={props.footerMenuItems2}/>
                <p>{props.text}</p>
            </div>
        </footer>
    );
}

export default Footer;
