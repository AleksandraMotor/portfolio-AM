import React from "react";
import * as SiIcons from 'react-icons/si';

import './ButtonCypress.scss';

const ButtonCypress: React.FC = () => {
    return (
        <div className='button-cy'>
            <div className='button-cy__border'>
                <div className='button-cy__border__icon'>
                    <SiIcons.SiCypress/>
                </div>   
                <div className='button-cy__border__description'>
                    press
                </div>
            </div>
            
        </div>
    );
};

export default ButtonCypress;
