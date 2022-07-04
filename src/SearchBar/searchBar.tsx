import React, {useState} from "react";

import {ReactComponent as MagnifyingGlass }from '../assets/magnifying-glass-search-svgrepo-com.svg';

import './searchBar.css';

interface SearchBarIntf {
  sendQuery: any;
}

export function SearchBar(props: SearchBarIntf) {
  const [searchTerm, setSearchTerm] = useState<string>();

  function sendQuery() {
    props.sendQuery(searchTerm)
  }

  return (<div className="search-bar">
    <input id="" size={30} type="search" onChange={(e)=>{setSearchTerm(e.target.value);}} onKeyUp={(e) => {if(e.key === "Enter") sendQuery();}} tabIndex={0} autoFocus></input>
    <button className="search-button" onClick={() => sendQuery()}><MagnifyingGlass/></button>
  </div>);

}
