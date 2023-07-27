import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import SocialIcons from "./SocialIcons";
import "./index.css";
import Body from "./components/body";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div className="container">
      <div>
        <Router>
          <nav>
            <Navbar>{Navbar}</Navbar>
          </nav>
        </Router>
      </div>
      <div>
        <main>
          <Body>{Body}</Body>
        </main>
      </div>
      <footer className="footer">
        <SocialIcons>{SocialIcons}</SocialIcons>
      </footer>
    </div>
  );
};

export default App;
