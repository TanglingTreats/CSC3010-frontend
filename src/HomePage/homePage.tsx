import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchBar } from "../SearchBar/searchBar"


interface HomePageIntf {
  appName: string
}

export function HomePage(props: HomePageIntf) {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  function sendQuery(query: string) {
    navigate(`/search?query=${query}`)
  }

  return (
    <div className="App-header">
      <h2>{props.appName}</h2>
      <SearchBar sendQuery={sendQuery}/>
    </div>
  )
}
