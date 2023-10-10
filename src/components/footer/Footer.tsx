import React from "react";
import * as SiIcons from 'react-icons/si';
import * as FiIcons from 'react-icons/fi';
import { Link } from "react-router-dom";

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
                <Link to='/portfolio-AM/contact'>
                    <FiIcons.FiMail/>
                </Link>      
        </div>
    );
};

export default Footer;
