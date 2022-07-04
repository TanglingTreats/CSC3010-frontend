import React from 'react';
import {ReactComponent as MagnifyingGlass }from './assets/magnifying-glass-search-svgrepo-com.svg';

import './App.css';

console.log(process.env.NODE_ENV);
const app_name = process.env.REACT_APP_NAME;

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h2>{app_name}</h2>
        <div className="search-bar">
          <input size={30} type="search" tabIndex={0} autoFocus></input>
          <button className="search-button"><MagnifyingGlass/></button>
        </div>
        <p>

        </p>
      </div>
    </div>
  );
}

export default App;
