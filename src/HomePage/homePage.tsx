import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "../SearchBar/searchBar"
import {ReactComponent as MagnifyingGlass }from '../assets/magnifying-glass-search-svgrepo-com.svg';


interface HomePageIntf {
  appName: string
}

export function HomePage(props: HomePageIntf) {

  function sendQuery(query: string) {
    console.log(`Sending query: ${query}`);
  }

  return (
    <div className="App-header">
      <h2>{props.appName}</h2>
      <SearchBar sendQuery={sendQuery}/>
    </div>
  )
}
