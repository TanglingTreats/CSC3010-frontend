import React, { useEffect, useState } from "react";
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import { SearchBar } from "../SearchBar/searchBar"
import { ResultItem } from "../ResultItem/resultItem"

import "./resultsPage.css";
import { RelevanceCategory } from "../RelevanceCategory/relevanceCategory";

interface ResultsPageProps {
  appName: string
}

export function ResultsPage(props: ResultsPageProps) {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  const filterString = searchParams.get("filterBy") || "";

  const [filters, setFilters] = useState<string[]>([]);

  const items = [
    {
      id: 1,
      title: `Result 1 based on ${query}`,
      desc: "Result 1 description",
      url: "https://openlibrary.org/works/OL2010879W/Rich_Dad_Poor_Dad?edition=ia:richdadpoordadwh00kiyo_0"
    },
    {
      id: 2,
      title: `Result 2 relevant to ${query}`,
      desc: "Result 2 description",
      url: "https://openlibrary.org/works/OL823107W/The_intelligent_investor"
    }
  ]

  const categories = [
    {
      header: "Genre",
      items: ["Finance", "Math"]
    }
  ]

  useEffect(() => {
    
  }, [])

  function returnToHome() {
    navigate(`/`);
  }
  function sendFilters(filters: string[]) {
    setFilters(filters);
    sendQuery(query, filters);
  }

  function sendQuery(query: string, filters: string[]) {
    navigate({pathname: '.', search: createSearchParams({query: query, ...(filters.length > 0) && {filterBy: filters.join('|')}}).toString()})
  }

  return (
    <div className="page">
      <header className="header">
        <h2 onClick={() => returnToHome()} style={{cursor: "pointer"}}>{props.appName}</h2>
        <SearchBar query={query} length="medium" sendQuery={sendQuery} autoFocus={false} />
      </header>
      <div className="page-body">
        <div className="relevancy-bar">
          {categories.map((category, index) => {
            return (<RelevanceCategory key={index} header={category.header} items={category.items} sendFilters={sendFilters}/>);
            })}
        </div>
        <div className="content">
          {items.map((res) => {
            return <ResultItem key={res.id} title={res.title} desc={res.desc} url={res.url}/>
          })}
        </div>
      </div>
    </div>
  )
}
