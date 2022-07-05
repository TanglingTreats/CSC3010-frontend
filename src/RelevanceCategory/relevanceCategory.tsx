import React from "react";

import './relevanceCategory.css';

interface RelevanceCategoryIntf {
  header: string;
  items: string[];
}
export function RelevanceCategory(props: RelevanceCategoryIntf) {
  return(
    <div className="relevance-category">
      <h4 className="relevance-header">{props.header}</h4>
      {props.items.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  )
}
