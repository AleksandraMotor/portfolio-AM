import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import classNames from 'classnames';
import { isDesktop } from 'react-device-detect';
import SidebarMobile from './components/sidebar-mobile/SidebarMobile';
import SidebarDesktop from './components/sidebar-desktop/SidebarDesktop';

import './Sidebar.scss';

const Sidebar: React.FunctionComponent = () => {
    const [showMenu, setshowMenu] = useState(true);
    const showSidebar = () => setshowMenu(!showMenu);

    return (
        <div
            className={classNames({
                'sidebar': true,
                'sidebar--desktop': isDesktop
            })}
        >
            <Link to="#" onClick={showSidebar}
                className={classNames({
                    'sidebar__burger': true,
                    'sidebar__burger--show-menu': showMenu,
                    'sidebar__burger--desktop': isDesktop
                })}
            >
                    {!showMenu && (
                        <FaIcons.FaBars />
                    )}
                    {showMenu && (
                        <FaIcons.FaTimes />
                    )}
            </Link>
            { showMenu && (
                <div className='sidebar__content'>
                    { !isDesktop && (
                        <SidebarMobile/>
                    )}
                    { isDesktop && (
                        <SidebarDesktop/>
                    )}
                </div>   
            )}

       </div>
   );
};

export default Sidebar;
