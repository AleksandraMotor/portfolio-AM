import React from 'react';
import * as SiIcons from 'react-icons/si';

import './ButtonSass.scss';

const ButtonSass: React.FC = () => {
    return (
        <div className='button-sass'>
            <div className='button-sass__icon'>
                <SiIcons.SiSass/>
            </div>   
            <div className='button-sass__description'>
                ass
            </div>
        </div>
    );
};

export default ButtonSass;
