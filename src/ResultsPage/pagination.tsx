import React from "react";

interface PaginationIntf {
  numOfPages: number;
  page: number;
  setPage: any;
}
export function Pagination(props: PaginationIntf) {

  const range = Array.from(Array(props.numOfPages).keys());

  return (
    <div className="pagination">
      {
        range.map((num: number, index:number) => {
          return <p key={num} className={`page-numbers ${props.page === num ? "current-page" : ""}`} onClick={() => {props.setPage(num);}}>{num + 1}</p>
        })
      }
    </div>
  )
}
