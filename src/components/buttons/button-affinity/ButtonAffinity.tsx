import React from "react";
import * as SiIcons from 'react-icons/si';

import './ButtonAffinity.scss';

const ButtonAffinity: React.FC = () => {
    return (
        <div className="button-affinity">
            <div className="button-affinity__border">
                <div className="button-affinity__border__frame">
                    <SiIcons.SiAffinityphoto/>
                    <span>Affinity Photo</span>
                </div>
            </div>
        </div>
    );
};

export default ButtonAffinity;
