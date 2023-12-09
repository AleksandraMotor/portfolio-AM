import React from "react";
import * as SiIcons from 'react-icons/si';
import * as FiIcons from 'react-icons/fi';
import { Link } from "react-router-dom";

import './Footer.scss';

const Footer: React.FunctionComponent = () => {

    return (
        <div className="footer">
                <a href="https://github.com/AleksandraMotor" target="_blank">
                    <SiIcons.SiGithub/>
                </a>
                <a href="https://www.linkedin.com/in/aleksandramotor/" target="_blank">
                    <SiIcons.SiLinkedin/>
                </a>
                <Link to='/portfolio-AM/contact'>
                    <FiIcons.FiMail/>
                </Link>      
        </div>
    );
};

export default Footer;
