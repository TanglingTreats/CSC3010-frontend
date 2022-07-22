import React from "react";
import {ReactComponent as MagnifyingGlass }from '../assets/magnifying-glass-search-svgrepo-com.svg';

interface RelatedSearchItemIntf {
  title: string;
  category: string;
  sendQuery: any;
  selectedFacet: string;
}

export function RelatedSearchItem(props: RelatedSearchItemIntf) {

  const indexToSlice = props.title.lastIndexOf(" ");
  const facetValue = props.title.slice(0, indexToSlice);

  const isSelected = facetValue === props.selectedFacet;

  return (
    <div className={`related-search ${isSelected ? "selected" : "select"}`} onClick={() => {if (!isSelected) props.sendQuery(props.category, facetValue)}}>
      <MagnifyingGlass width="20px"/>
      <p>{props.title}</p>
    </div>

  )
}
