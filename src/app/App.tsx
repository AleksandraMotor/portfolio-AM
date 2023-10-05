import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { isDesktop, isMobile } from 'react-device-detect';
import Home from '../pages/home/Home';
import Skills from '../pages/skills/Skills';
import Projects from '../pages/projects/Projects';
import Contact from '../pages/contact/Contact';
import Banner from '../components/banner/Banner';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';

import classNames from 'classnames';

import './App.scss';

const App: React.FunctionComponent = () => {
  return (
    <div className="app">
      <div className={classNames({
        'app__banner': true,
        'app__banner--mobile': isMobile
        })}>
        <Banner/>
      </div>
      <div 
        className={classNames({
          'app__main': true,
          'app__main--desktop': isDesktop,
        })}
      >
        <Router>
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
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/projects' element={<Projects />} />    
              <Route path='/contact' element={<Contact />} />            
            </Routes>
          </div>
        </Router> 
      </div>
      <div className={classNames({
        'app__footer': true,
        'app__footer--mobile': isMobile
        })}
      >
        <Footer/>
      </div>
    </div>
  );
};

export default App;