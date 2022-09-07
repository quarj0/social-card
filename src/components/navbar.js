import React from "react";
import './navbar.css';



const navbar = () => {
  return (
    <div>
        <nav className="navbar-container">
            <ul className="navbar">
                <li><a href="#project" rel="noopener noreferrer">Projects</a></li>
                <li><a href="#services" rel="noopener noreferrer">Services</a></li>
                <li><a href="#contact" rel="noopener noreferrer">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default navbar