import React, {useState} from "react";

import {ReactComponent as MagnifyingGlass }from '../assets/magnifying-glass-search-svgrepo-com.svg';

import './searchBar.css';

interface SearchBarIntf {
  query?: string;
  length?: string;
  autoFocus?: boolean;
  sendQuery: any;
}

export function SearchBar(props: SearchBarIntf) {
  const [searchTerm, setSearchTerm] = useState<string>(props.query || "");
  const [autoFocus, setAutoFocus] = useState<boolean>(props.autoFocus == undefined ? true : props.autoFocus);

  const query = props.query || "";

  const length = props.length || "small";

  function sendQuery() {
    props.sendQuery(searchTerm);
  }

  return (<div className={`search-bar ${length}`}>
    <input id="" key={query} defaultValue={query} size={30} type="search" onChange={(e)=>{setSearchTerm(e.target.value);}} onKeyUp={(e) => {if(e.key === "Enter") sendQuery();}} tabIndex={0} autoFocus={autoFocus}></input>
    <button className="search-button" onClick={() => sendQuery()}><MagnifyingGlass/></button>
  </div>);

}
