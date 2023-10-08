import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Skills from '../pages/skills/Skills';
import Projects from '../pages/projects/Projects';
import Contact from '../pages/contact/Contact';
import Layout from '../pages/layout/Layout';

import './App.scss';

const App: React.FunctionComponent = () => {
  return (
    <div className="app">
      <BrowserRouter>
            <Routes>
              <Route path='portfolio-AM/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='portfolio-AM/skills' element={<Skills />} />
                <Route path='portfolio-AM/projects' element={<Projects />} />    
                <Route path='portfolio-AM/contact' element={<Contact />} /> 
                <Route path='*' element={<Contact />} /> 
              </Route>
            </Routes>
        </BrowserRouter> 
    </div>
  );
};

export default App;