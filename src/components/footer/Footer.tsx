import React from "react";
import * as SiIcons from 'react-icons/si';
import * as FiIcons from 'react-icons/fi';

import './Footer.scss';

const Footer: React.FC = () =>{
    return (
        <div className="footer">
            <div className="footer__icon">
                <SiIcons.SiGithub/>
            </div>
            <div className="footer__icon">
                <SiIcons.SiLinkedin/>
            </div>
            <div className="footer__icon">
                <FiIcons.FiMail/>
            </div>
        </div>
    );
};

export default Footer;