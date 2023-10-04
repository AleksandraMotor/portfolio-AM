import React from "react";
import * as SiIcons from 'react-icons/si';

import './ButtonAngular.scss';

const ButtonAngular: React.FC = () => {
    return (
        <div className='button-angular'>
            <div className='button-angular__frame'>
                <span className='button-angular__frame__icon'>
                    <SiIcons.SiAngular/>
                </span>   
                <span className='button-angular__frame__description'>
                    ngular
                </span>
            </div>
        </div>
    );
}

export default ButtonAngular;
