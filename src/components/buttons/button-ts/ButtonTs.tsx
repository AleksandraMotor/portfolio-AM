import React from "react";
import * as SiIcons from 'react-icons/si';

import './ButtonTs.scss';

const ButtonTs: React.FC = () => {
    return (
        <div className="button-ts">
            <div className='button-ts__frame'>
                <div className='button-ts__frame__icon'>
                    <SiIcons.SiTypescript/>
                </div>                       
                <div className='button-ts__frame__description'>
                    TypeScript
                </div>
            </div>
        </div>
    );
};

export default ButtonTs;
