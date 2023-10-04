import React from 'react';
import * as SiIcons from 'react-icons/si';

import './ButtonReact.scss';

const ButtonReact: React.FC = () => {
    return (
        <div className='button-react'>
            <div className='button-react__icon'>
                <SiIcons.SiReact/>
            </div>   
            <div className='button-react__description'>
                React
            </div>
                 
        </div>
    );
};

export default ButtonReact;
