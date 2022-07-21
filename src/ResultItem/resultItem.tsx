import React, { useState } from "react";

import "./resultItem.css";

interface ResultItemIntf {
  title?: string;
  desc?: string;
  author?: string;
  bookID?: string;
  language?: string;
  publisher?: string;
  publishDate?: string;
  url: string;
}

export function ResultItem(props: ResultItemIntf) {

  return (
    <div className="result-item">
      <a href={props.url} target="_blank" rel="noreferrer"><b>{props.title}</b></a>
      <p>{props.desc}</p>
    </div>
  )
}
