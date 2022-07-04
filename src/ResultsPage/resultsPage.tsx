import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchBar } from "../SearchBar/searchBar"

import "./resultsPage.css";

interface ResultsPageProps {
  appName: string
}

export function ResultsPage(props: ResultsPageProps) {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  function sendQuery(query: string) {
    navigate(`/search?query=${query}`)
  }

  return (
    <div className="page">
      <header className="header">
        <h2>{props.appName}</h2>
        <SearchBar query={query} sendQuery={sendQuery} />
      </header>
      <div className="content">
      </div>
    </div>
  )
}
