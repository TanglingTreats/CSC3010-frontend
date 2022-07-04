import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ResultItemIntf {
  title?: string;
  desc?: string;
  url: string;
}

export function ResultItem(props: ResultItemIntf) {
  const navigate = useNavigate();

  function openTabTo(url: string) {
    window.open(url, '_blank');
  }

  return (
    <div>
      <h3 onClick={() => {openTabTo(props.url)}} style={{cursor: "pointer"}}>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  )
}
