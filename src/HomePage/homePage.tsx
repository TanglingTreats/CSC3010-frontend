import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {ReactComponent as MagnifyingGlass }from '../assets/magnifying-glass-search-svgrepo-com.svg';


interface HomePageIntf {
  appName: string
}

export function HomePage(props: HomePageIntf) {
  let [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState<string>();

  function sendQuery() {
    console.log(`Sending query: ${searchTerm}`);
  }

  return (
    <div className="App-header">
      <h2>{props.appName}</h2>
      <div className="search-bar">
        <input id="" size={30} type="search" onChange={(e)=>{setSearchTerm(e.target.value);}} onKeyUp={(e) => {if(e.key === "Enter") sendQuery();}} tabIndex={0} autoFocus></input>
        <button className="search-button" onClick={() => sendQuery()}><MagnifyingGlass/></button>
      </div>
      <p>

      </p>
    </div>
  )
}
