import React from 'react';
import {ReactComponent as MagnifyingGlass }from './assets/magnifying-glass-search-svgrepo-com.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h2>Lib Search</h2>
        <div className="search-bar">
          <input size={30} type="search" tabIndex={0} autoFocus></input>
          <button className="search-button"><MagnifyingGlass/></button>
        </div>
        <p>

        </p>
      </header>
    </div>
  );
}

export default App;
