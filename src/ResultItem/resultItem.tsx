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

  const defaultItem = {
    title: "No title was provided",
    url: "https://google.com",
    desc: "No description was provided"
  }

  const item = {
    ...defaultItem,
    ...props,
    desc: props.desc === " " || props.desc!.length === 0 ? defaultItem.desc : props.desc
  }

  return (
    <div className="result-item">
      <a href={item.url} target="_blank" rel="noreferrer"><b>{item.title}</b></a>
      <p>{item.desc}</p>
      <p>By: {item.author}</p>
    </div>
  )
}
