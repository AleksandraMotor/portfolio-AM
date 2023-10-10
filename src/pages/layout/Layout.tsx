import React from 'react';
import { Outlet } from 'react-router-dom';
import { isDesktop } from 'react-device-detect';
import classNames from 'classnames';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';

import './Layout.scss';

const Layout: React.FunctionComponent = () => {
  return (
    <div className="layout">
      <div className={classNames({
        'layout__banner': true,
        'layout__banner--desktop': isDesktop
        })}>
        <Banner/>
      </div>
      <div 
        className={classNames({
          'layout__main': true,
          'layout__main--desktop': isDesktop,
        })}
      >
          <div
            className={classNames({
              'layout__main__sidebar': true,
              'layout__main__sidebar--desktop': isDesktop,
            })}
          >
            <Sidebar/>
          </div>
          <div
            className={classNames({
              'layout__main__content': true,
              'layout__main__content--desktop': isDesktop,
            })}
          >
            <Outlet/>
          </div>
      </div>
      <div className={classNames({
        'layout__footer': true,
        'layout__footer--desktop': isDesktop
        })}
      >
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
