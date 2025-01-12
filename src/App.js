import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
 
 
 


  return (
    <div className="App">
   
        
        <div>
          <Header/>
          <Outlet/>
        </div>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    </div>
  );
}

export default App;
