import React from "react";
import {ReactComponent as MagnifyingGlass }from '../assets/magnifying-glass-search-svgrepo-com.svg';

interface RelatedSearchItemIntf {
  title: string;
  category: string;
  sendQuery: any;
}

export function RelatedSearchItem(props: RelatedSearchItemIntf) {

  const indexToSlice = props.title.lastIndexOf(" ");
  const facetValue = props.title.slice(0, indexToSlice);
  return (
    <div className="related-search" style={{cursor: "pointer"}} onClick={() => props.sendQuery(props.category, facetValue)}>
      <MagnifyingGlass width="20px"/>
      <p>{props.title}</p>
    </div>

  )
}
