import React, { useEffect, useState } from "react";
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import { SearchBar } from "../SearchBar/searchBar";
import { ResultItem } from "../ResultItem/resultItem";

import "./resultsPage.css";
import { FilterBar } from "../FilterBar/filterBar";
import {RelatedSearch} from "../RelatedSearch/relatedSearch";
import {RelatedSearchItem} from "../RelatedSearch/relatedSearchItem";
import {makeQuery} from "../common/apiCall";
import {Pagination} from "./pagination";

interface ResultsPageProps {
  appName: string
}

export function ResultsPage(props: ResultsPageProps) {

  const resultsPerPage = 10;

  const filterBarVisibility = "hidden";

  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  const filterString = searchParams.get("filterBy") || "";

  const [filters, setFilters] = useState<string[]>([]);

  const [queryResults, setQueryResults] = useState<any>([]);
  const [facets, setFacets] = useState<Object>({});

  const [numberOfPages, setNumOfPages] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  let items = [
    {
      bookID: 1,
      title: `Result 1 based on ${query}`,
      description: "Result 1 description",
      url: "https://openlibrary.org/works/OL2010879W/Rich_Dad_Poor_Dad?edition=ia:richdadpoordadwh00kiyo_0"
    },
    {
      bookID: 2,
      title: `Result 2 relevant to ${query}`,
      description: "Result 2 description",
      url: "https://openlibrary.org/works/OL823107W/The_intelligent_investor"
    }
  ]

  const categories = [
    {
      header: "Subject",
      items: ["Finance", "Math"]
    }
  ]

  const relatedSearch = [
    "Rich Dad, Poor Dad",
    "The Intelligent Investor",
    "Think and Grow Rich",
    "The Richest Man in Babylon",
  ]

  useEffect(() => {
    makeQuery(query).then((res) => {
      if(!res.error) {
        setQueryResults(res.slice(0, -1));
        setFacets(res[res.length - 1]);

        setNumOfPages(Math.ceil(res.length / resultsPerPage));
      } else {
        console.log(res.error);
      }
    });
  }, [query]);

  useEffect(() => {
    sendQuery(query);
  }, [filters])

  function returnToHome() {
    navigate(`/`);
  }

  function sendFilters(filters: string[]) {
    setFilters(filters);
  }

  function sendQuery(query: string) {
    navigate({pathname: '.', search: createSearchParams({query: query, ...(filters.length > 0) && {filterBy: filters.join('|')}}).toString()})
  }

  return (
    <div className="page">
      <header className="header">
        <h2 onClick={() => returnToHome()} style={{cursor: "pointer"}}>{props.appName}</h2>
        <SearchBar query={query} length="medium" sendQuery={sendQuery} autoFocus={false} />
      </header>
      <div className="page-body">
        <div className="filter-bar" style={{"visibility": filterBarVisibility}}>
          {categories.map((category, index) => {
            return (<FilterBar key={index} header={category.header} items={category.items} sendFilters={sendFilters}/>);
            })}
        </div>
        <div className="content">
          <>
            {queryResults.length > 0 ? (queryResults.map((res: any, index: number) => {
              if(index >= page * resultsPerPage && index < (page * resultsPerPage) + resultsPerPage) {
                return <ResultItem key={res.bookID} title={res.title} desc={res.description} url={res.url} author={res.author}/>
              } else {
                return false;
              }
            })) : <p>No results were found</p>}
          </>
        </div>
        <RelatedSearch style={{"visibility": "hidden"}}>
          {relatedSearch.map((res, index) => {
            return <RelatedSearchItem key={index} title={res} sendQuery={sendQuery} />
          })}
        </RelatedSearch>
      </div>
      <Pagination page={page} numOfPages={numberOfPages} setPage={setPage}/>
    </div>
  )
}
