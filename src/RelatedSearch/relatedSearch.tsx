import React from "react";

import "./relatedSearch.css";
import {RelatedSearchItem} from "./relatedSearchItem";

interface RelatedSearchIntf {
  title: string;
  facets: string[];
  sendQuery: any;
}

export function RelatedSearch(props: RelatedSearchIntf) {
  return (
    <div>
      <h4>{props.title}</h4>
      {props.facets.map((facet: string, index: number) => {
        return <RelatedSearchItem key={facet} category={props.title} title={facet} sendQuery={props.sendQuery} />
      })}
    </div>
  )
}
