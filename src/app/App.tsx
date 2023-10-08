import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Skills from '../pages/skills/Skills';
import Projects from '../pages/projects/Projects';
import Contact from '../pages/contact/Contact';
import Layout from '../pages/layout/Layout';

import './App.scss';

export default function App() {
  return (
      <BrowserRouter>
            <Routes>

              {/* Prod mode */}

              {/* <Route path='portfolio-AM/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/portfolio-AM/skills' element={<Skills />} />
                <Route path='/portfolio-AM/projects' element={<Projects />} />    
                <Route path='/portfolio-AM/contact' element={<Contact />} /> 
              </Route> */}

              {/* Dev mode */}
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='skills' element={<Skills />} />
                <Route path='projects' element={<Projects />} />    
                <Route path='contact' element={<Contact />} /> 
              </Route>
            </Routes>
        </BrowserRouter> 
  );
};
