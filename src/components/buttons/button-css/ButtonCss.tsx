import React from "react";
import * as SiIcons from 'react-icons/si';

import './ButtonCss.scss';

const ButtonCss: React.FC = () => {
    return (
        <div className='button-css'>
            <div className='button-css__border'>
                <div className='button-css__border__description'>
                    css
                </div>
                <div className='button-css__border__icon'>
                    <SiIcons.SiCss3/>
                </div>   
            </div>
        </div>
    );
};

export default ButtonCss;
