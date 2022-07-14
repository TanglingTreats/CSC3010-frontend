import React from "react";

import "./relatedSearch.css";

interface RelatedSearchIntf {
  style?: React.CSSProperties;
  children?: JSX.Element | JSX.Element[];
}

export function RelatedSearch(props: RelatedSearchIntf) {
  return (
    <div className="related-searches-box" style={props.style}>
      <h4>Related Searches</h4>
      {props.children}
    </div>
  )
}
