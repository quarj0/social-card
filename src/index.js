import React from 'react';
import ReactDOM from 'react-dom/client';
import SocialIcons   from './SocialIcons';
import './index.css';
import Body from './components/body';
import Navbar from './components/navbar';

import {
  BrowserRouter as Router,
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

