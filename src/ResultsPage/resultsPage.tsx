import React from "react";

interface ResultsPageProps {
  appName: string
}

export function ResultsPage(props: ResultsPageProps) {
  return (
    <div className="page">
      <header>
        <h2>props.appName</h2>
      </header>
      <div className="content">
      </div>
    </div>
  )
}
