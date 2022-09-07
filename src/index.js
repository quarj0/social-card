import React from 'react';
import ReactDOM from 'react-dom/client';
import SocialIcons   from './SocialIcons';
import './index.css';
import Body from './components/body';
import Navbar from './components/navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div className='container'>
  <nav>
    <Navbar>
      {Navbar}
    </Navbar>
    </nav>
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

