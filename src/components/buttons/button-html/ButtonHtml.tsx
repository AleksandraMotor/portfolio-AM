import React from 'react';
import * as SiIcons from 'react-icons/si';

import './ButtonHtml.scss';

const ButtonHtml: React.FC = () => {
    return (
        <div className='button-html'>
            <div className='button-html__description'>
                html
            </div>
            <div className='button-html__icon'>
                <SiIcons.SiHtml5/>
            </div>                    
        </div>
    );
};

export default ButtonHtml;
