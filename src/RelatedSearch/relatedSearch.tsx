import React from "react";

import {ReactComponent as MagnifyingGlass }from '../assets/magnifying-glass-search-svgrepo-com.svg';
import "./relatedSearch.css";

export function RelatedSearch() {
  return (
    <div className="related-searches-box">
      <h4>Related Searches</h4>
      <div className="related-search">
        <MagnifyingGlass width="20px"/>
        <p>Related search 1</p>
      </div>
      <div className="related-search">
        <MagnifyingGlass width="20px"/>
        <p>Related search 1</p>
      </div>
      <div className="related-search">
        <MagnifyingGlass width="20px"/>
        <p>Related search 1</p>
      </div>
    </div>
  )
}
