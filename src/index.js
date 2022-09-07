import React from 'react';
import ReactDOM from 'react-dom/client';
import SocialIcons   from './SocialIcons';
import './index.css';
import Body from './components/body';
import Navbar from './components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsappSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div className='container'>
    <nav className='navbar'>
      {Navbar}
    </nav>
    <div>
      <Body>{Body}</Body>
      </div>
      <footer className='footer'>
      <SocialIcons>{SocialIcons}</SocialIcons>
      </footer>
 </div>
);

