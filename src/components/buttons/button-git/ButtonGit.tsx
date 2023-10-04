import React from "react";
import * as SiIcons from 'react-icons/si';

import './ButtonGit.scss';

const ButtonGit: React.FC = () => {
    return (
        <div className="button-git">
            <div className="button-git__frame">
                <div className='button-git__frame__description'>
                    Git
                </div>
                <div className='button-git__frame__icon'>
                    <SiIcons.SiGithub/>
                </div>   
            </div>
        </div>
    );
};

export default ButtonGit;
