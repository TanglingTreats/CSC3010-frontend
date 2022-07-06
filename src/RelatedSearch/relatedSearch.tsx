import React from "react";

import "./relatedSearch.css";

interface RelatedSearchIntf {
  children?: JSX.Element | JSX.Element[];
}

export function RelatedSearch(props: RelatedSearchIntf) {
  return (
    <div className="related-searches-box">
      <h4>Related Searches</h4>
      {props.children}
    </div>
  )
}
