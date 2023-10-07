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
    <div className="app">
      <div className={classNames({
        'app__banner': true,
        'app__banner--desktop': isDesktop
        })}>
        <Banner/>
      </div>
      <div 
        className={classNames({
          'app__main': true,
          'app__main--desktop': isDesktop,
        })}
      >
          <div
            className={classNames({
              'app__main__sidebar': true,
              'app__main__sidebar--desktop': isDesktop,
            })}
          >
            <Sidebar/>
          </div>
          <div
            className={classNames({
              'app__main__content': true,
              'app__main__content--desktop': isDesktop,
            })}
          >
            <Outlet/>
          </div>
      </div>
      <div className={classNames({
        'app__footer': true,
        'app__footer--desktop': isDesktop
        })}
      >
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;