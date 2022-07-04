import React, { useState } from "react";

import "./resultItem.css";

interface ResultItemIntf {
  title?: string;
  desc?: string;
  url: string;
}

export function ResultItem(props: ResultItemIntf) {

  return (
    <div className="result-item">
      <a href={props.url} target="_blank" rel="noreferrer"><h3>{props.title}</h3></a>
      <p>{props.desc}</p>
    </div>
  )
}
