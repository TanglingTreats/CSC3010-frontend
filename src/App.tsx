import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import {HomePage} from './HomePage/homePage';
import {ResultsPage} from './ResultsPage/resultsPage';

const appName = process.env.REACT_APP_NAME || "Default App";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage appName={appName} />}/>
        <Route path="/search" element={<ResultsPage appName={appName}/>}/>
      </Routes>
    </div>
  );
}

export default App;
