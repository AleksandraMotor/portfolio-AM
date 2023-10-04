import React from 'react';
import { SidebarData } from '../../SidebarData';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './SidebarDesktop.scss';

const SidebarDesktop: React.FC = () => {

    return (
        <div className='menu-d'>
            {SidebarData.map((item, index) => {
                return (
                    <Link
                        key={index}
                        to={item.path} 
                        className={classNames({
                            'menu-d__item': true,
                        })}
                    >
                        <div className="menu-d__item__hexagon">
                            {item.icon}
                        </div>
                        <div className="menu-d__item__text">
                            {item.title}
                        </div>
                    </Link>
                )
            })}
        </div>

    );
};

export default SidebarDesktop;
