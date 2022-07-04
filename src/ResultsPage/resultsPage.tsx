import React, { useEffect } from "react";
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import { SearchBar } from "../SearchBar/searchBar"

import "./resultsPage.css";

interface ResultsPageProps {
  appName: string
}

export function ResultsPage(props: ResultsPageProps) {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  useEffect(() => {
    
  }, [])

  function returnToHome() {
    navigate(`/`);
  }
  function sendQuery(query: string) {
    navigate({pathname: '.', search: createSearchParams({query: query}).toString()})
  }

  return (
    <div className="page">
      <header className="header">
        <h2 onClick={() => returnToHome()} style={{cursor: "pointer"}}>{props.appName}</h2>
        <SearchBar query={query} sendQuery={sendQuery} autoFocus={false} />
      </header>
      <div className="content">
      </div>
    </div>
  )
}
