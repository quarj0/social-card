import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";


const navbar = () => {
  return (
    <div>
        <nav className="navbar-container">
            <ul className="navbar">
           <Link to="project" className="li a">Projects</Link>
           <Link to="services" className="li a">Services</Link>
           <Link to="contact" className="li a">Contact</Link>
           <Link to="home" className="li a far">Home</Link>
            </ul>
        </nav>

    </div>
  )
}

export default navbar