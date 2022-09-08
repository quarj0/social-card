import React from 'react';
import ReactDOM from 'react-dom/client';
import SocialIcons   from './SocialIcons';
import './index.css';
import Body from './components/body';
import Navbar from './components/navbar';
import Project from './components/project'
import Service from './components/services'
import Contact from './components/contact'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div className='container'>
  <div>
  <Router>
  <nav>
    <Navbar>
      {Navbar}
    </Navbar>
    <Routes>
      <Route path="/project" element={<Project />} />
      <Route path="/services" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </nav>
    </Router>
    </div>
    <div>
      <main>
      <Body>{Body}</Body>
      </main>
      </div>
      <footer className='footer'>
      <SocialIcons>{SocialIcons}</SocialIcons>
      </footer>
      
 </div>
);

