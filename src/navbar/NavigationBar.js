import React, { useState } from 'react';
import './NavigationBar.css'; 
import bar from './bar.jpg'; 

function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">lycee</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/events">Events</a></li>
      </ul>
      <div className="login-button"><a href="/login">Log In</a></div>
      <div className="dropdown-container">
        <img src={bar} alt="bar" className="bar" onClick={toggleMenu} />
        <ul className={`dropdown-menu ${showMenu ? '' : 'hidden'}`}>
        <li><a href="D:\Lycee\lycee\src\navbar\home\Home.js">Home</a></li>
            <li><a href="D:\Lycee\lycee\src\navbar\home\Home.js">About</a></li>
            <li><a href="D:\Lycee\lycee\src\navbar\home\Home.js">Events</a></li>
            <li><a href="D:\Lycee\lycee\src\navbar\home\Home.js">Log In</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
