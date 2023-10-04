import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../../SidebarData';
import classNames from 'classnames';

import './SidebarMobile.scss';

const SidebarMobile: React.FC = () => {
    return (
        <div className='menu-m'>
            {SidebarData.map((item, index) => {
                return (
                    <Link
                        key={index}
                        to={item.path}
                        className={classNames({
                            'menu-m__item': true,
                        })}
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
