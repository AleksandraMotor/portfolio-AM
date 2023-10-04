import React from "react";
import * as SiIcons from 'react-icons/si';

import './ButtonTailwind.scss';

const ButtonTailwind: React.FC = () => {
    return (
        <div className='button-tailwind'>
            <div className='button-tailwind__border'>
                <div className='button-tailwind__border__frame'>
                    <div className='button-tailwind__border__frame__icon'>
                        <SiIcons.SiTailwindcss/>
                    </div>   
                    <div className='button-tailwind__border__frame__description'>
                        tailwind
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonTailwind;
