import React from "react";
import * as SiIcons from 'react-icons/si';

import './ButtonPs.scss';

const ButtonPs: React.FC = () => {
    return (
        <div className='button-ps'>
            <div className='button-ps__frame'>
                <div className='button-ps__frame__icon'>
                    <SiIcons.SiAdobephotoshop/>
                </div>   
                <div className='button-ps__frame__description'>
                    Adobe Photoshop
                </div>
            </div>
        </div>
    );
};

export default ButtonPs;
