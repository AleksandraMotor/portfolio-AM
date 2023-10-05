import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../../SidebarData';

import './SidebarMobile.scss';

const SidebarMobile: React.FC = () => {
    return (
        <div className='menu-m'>
            {SidebarData.map((item, index) => {
                return (
                    <Link
                        key={index}
                        to={item.path}
                        className="menu-m__item"
                    >
                        <div className='menu-m__item__text'>
                            {item.title}
                        </div>
                    </Link>  
                )                 
            })}
        </div>
    );
};

export default SidebarMobile;
