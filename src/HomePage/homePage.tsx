import React, { useState } from "react";
import { useNavigate, useSearchParams, createSearchParams } from "react-router-dom";
import { SearchBar } from "../SearchBar/searchBar"


interface HomePageIntf {
  appName: string
}

export function HomePage(props: HomePageIntf) {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  function sendQuery(query: string) {
    navigate({pathname: 'search' search: createSearchParams({query: query}).toString()})
  }

  return (
    <div className="App-header">
      <h2>{props.appName}</h2>
      <SearchBar sendQuery={sendQuery}/>
    </div>
  )
}
