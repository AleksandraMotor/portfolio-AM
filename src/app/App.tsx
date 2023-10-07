import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { isDesktop } from 'react-device-detect';
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
              <Route path='/portfolio-AM/' element={<Home />} />
              <Route path='/portfolio-AM/skills' element={<Skills />} />
              <Route path='/portfolio-AM/projects' element={<Projects />} />    
              <Route path='/portfolio-AM/contact' element={<Contact />} />            
            </Routes>
          </div>
        </Router> 
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

export default App;