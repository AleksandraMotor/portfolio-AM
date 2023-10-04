import React from 'react';
import logo from '../../assets/img/logo.png';

import './Banner.scss';

const Banner: React.FC = () => {
    return (
        <div className='banner'>
            <div className="banner__logo">    
                <img src={logo} alt='Grafika - RWD'/>              
            </div>
            <div className="banner__header">
                <div className="banner__header__name">
                    Aleksandra Motor
                </div>
                <div className="banner__header__title">
                    Frontend Developer 
                </div> 
                <div className="banner__header__subtitle">
                    with passion for aesthetic and functional web design
                </div>  
            </div>
        </div>
    );
};

export default Banner;