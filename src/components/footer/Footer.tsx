import React from "react";
import * as SiIcons from 'react-icons/si';
import * as FiIcons from 'react-icons/fi';

import './Footer.scss';

const Footer: React.FunctionComponent = () => {

    return (
        <div className="footer">
                <a href="https://github.com/AleksandraMotor">
                    <SiIcons.SiGithub/>
                </a>
                <a href="https://www.linkedin.com/in/aleksandramotor/">
                    <SiIcons.SiLinkedin/>
                </a>
                <a href="/portfolio-AM/contact">
                    <FiIcons.FiMail/>
                </a>      
        </div>
    );
};

export default Footer;
