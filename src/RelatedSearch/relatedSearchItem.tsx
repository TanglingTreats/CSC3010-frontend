import React from "react";
import {ReactComponent as MagnifyingGlass }from '../assets/magnifying-glass-search-svgrepo-com.svg';

interface RelatedSearchItemIntf {
  title: string;
  sendQuery: any;
}

export function RelatedSearchItem(props: RelatedSearchItemIntf) {
  return (
    <div className="related-search" style={{cursor: "pointer"}} onClick={() => props.sendQuery(props.title)}>
      <MagnifyingGlass width="20px"/>
      <p>{props.title}</p>
    </div>

  )
}
