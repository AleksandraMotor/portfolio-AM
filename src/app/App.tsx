import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Skills from '../pages/skills/Skills';
import Projects from '../pages/projects/Projects';
import Contact from '../pages/contact/Contact';
import Layout from '../pages/layout/Layout';

import './App.scss';

const App: React.FunctionComponent = () => {
  return (
        <Router>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='skills' element={<Skills />} />
                <Route path='projects' element={<Projects />} />    
                <Route path='contact' element={<Contact />} />  
              </Route>
            </Routes>
        </Router> 
  );
};

export default App;