import React, { useEffect } from "react";
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import { SearchBar } from "../SearchBar/searchBar"
import { ResultItem } from "../ResultItem/resultItem"

import "./resultsPage.css";

interface ResultsPageProps {
  appName: string
}

export function ResultsPage(props: ResultsPageProps) {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  const items = [
    {
      id: 1,
      title: `Result 1 based on ${query}`,
      desc: "Result 1 description",
      url: "https://www.facebook.com"
    },
    {
      id: 2,
      title: `Result 2 relevant to ${query}`,
      desc: "Result 2 description",
      url: "https://google.com"
    }
  ]

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
        <SearchBar query={query} length="medium" sendQuery={sendQuery} autoFocus={false} />
      </header>
      <div className="content">
        {items.map((res) => {
          return <ResultItem key={res.id} title={res.title} desc={res.desc} url={res.url}/>
        })}
      </div>
    </div>
  )
}
