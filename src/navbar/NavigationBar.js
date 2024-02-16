import React from 'react';
import './NavigationBar.css'; 
import bar from './bar.jpg'; 

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="logo">lycee</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/events">Events</a></li>
      </ul>
      <div className="login-button"><a href="/login">Log In</a></div>
      <img src={bar} alt="Responsive Image" className="bar" />
    </nav>
  );
}

export default NavigationBar;
