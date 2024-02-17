// App.js
import './index.css';
import React from 'react';
import './navbar/NavigationBar.css'; 
import NavigationBar from './navbar/NavigationBar';
import './navbar/home/Home'; 
import Home from './navbar/home/Home';

//main
function App() {
  return (
    <div> 
      <NavigationBar /> 
      <Home /> 
    </div>
  );
}

export default App;
