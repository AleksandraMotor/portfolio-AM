import React from 'react';
import * as SiIcons from 'react-icons/si';

import './ButtonJs.scss';

const ButtonJs: React.FC = () => {
    return (
        <div className='button-js'>
            <div className='button-js__icon'>
                <SiIcons.SiJavascript/>
            </div>   
            <div className='button-js__description'>
                <div className='button-js__description--h'>cript</div>
                <div className='button-js__description--v'>ava</div>
            </div>
                 
        </div>
    );
};

export default ButtonJs;
