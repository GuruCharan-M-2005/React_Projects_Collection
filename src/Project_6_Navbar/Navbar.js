import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
        <h1 style={{textAlign:'center'}}>Navigation Bar</h1>
      <ul className="nav-list">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#services">Services</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
